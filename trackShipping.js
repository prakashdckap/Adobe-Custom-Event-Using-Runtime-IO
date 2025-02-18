const axios = require('axios');
const xml2js = require('xml2js');

const CLIENT_ID = "55e9a838d14846078285c566eb058c60";
const CLIENT_SECRET = "p8e-Uk_024-67ZcNThiIDqNrE_xmFeWlTkvc";
const TOKEN_URL = "https://ims-na1.adobelogin.com/ims/token/v3";

/**
 * Fetch a new Adobe I/O access token
 */
async function getAccessToken() {
    try {
        const response = await axios.post(
            TOKEN_URL,
            new URLSearchParams({
                grant_type: "client_credentials",
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                scope: "AdobeID,openid,read_organizations,additional_info.projectedProductContext,additional_info.roles,adobeio_api,read_client_secret,manage_client_secrets,event_receiver_api"
            }),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Token Fetch Error:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch access token.");
    }
}

/**
 * Fetch XML data from a URL and parse it.
 */
async function fetchXMLData(url) {
    try {
        const response = await axios.get(url, { responseType: 'text' });
        const result = await xml2js.parseStringPromise(response.data);
        return { status: "Success", data: result };
    } catch (error) {
        return { status: "Error", message: `XML Fetching Failed: ${error.message}` };
    }
}

/**
 * Send parsed data to Adobe I/O Event
 */
async function sendToAdobeEvent(parsedData, eventUrl, eventType) {
    try {
        const accessToken = await getAccessToken(); // Fetch new token before request

        const eventPayload = {
            datacontenttype: "application/json",
            specversion: "1.0",
            source: "urn:uuid:32b34582-bd67-4817-b953-a0b878a5656b",
            type: eventType, // Dynamic event type based on "Cmd"
            id: "urn:uuid:32b34582-bd67-4817-b953-a0b878a5656b",
            data: parsedData
        };

        const response = await axios.post(eventUrl, eventPayload, {
            headers: {
                'x-api-key': CLIENT_ID,
                'Content-Type': 'application/cloudevents+json',
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return { eventUrl, status: "Success", response: response.data };
    } catch (error) {
        return { 
            eventUrl, 
            status: "Error", 
            message: error.response ? error.response.data : error.message 
        };
    }
}

/**
 * Main function
 */
exports.main = async (params) => {
    const xmldata = params["__ow_body"];
     const xmlData = await xml2js.parseStringPromise(xmldata);
    //const xmlUrl = params.xmlUrl || 'https://akeneo.rdklizer.com/test.xml';
    const eventUrl = params.eventUrl || "https://eventsingress.adobe.io";

    let mlwData = xmlData?.MLW;
    
    if (!mlwData || !mlwData.$ || !mlwData.$.Cmd) {
        return { status: "Error", message: "Invalid XML Data - Missing Cmd" };
    }

    const cmdValue = mlwData.$.Cmd;

    // Determine event type based on "Cmd" value
    let eventType;
    if (cmdValue === "5") {
        eventType = "com.descrates.parsexml"; 
    } else if (cmdValue === "6") {
        eventType = "com.desrates.magento"; 
    } else {
        return { status: "Error", message: `Unsupported Cmd value: ${cmdValue}` };
    }

    // Send parsed data to Adobe I/O event
    const eventResult = await sendToAdobeEvent(mlwData, eventUrl, eventType);

    return { status: "Completed", cmd: cmdValue, eventResult };
};
