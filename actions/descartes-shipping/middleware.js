const axios = require('axios');
const xml2js = require('xml2js');
const {parseString} = require("xml2js");

async function fetchDescartesXML() {
    // const url = params.xmlUrl;
    const url = 'http://localhost/appbuilder/actions/descartes-shipping/test.xml';  // Replace with actual URL
    const response = await axios.get(url, { responseType: 'xml' });

    return response.data;
}

async function parseXML(xml) {
    const parser = new xml2js.Parser();
    console.log(11);
    const result = await parser.parseString(xml);
    parseString(xml, function (err, result) {
        console. dir(result);
    });

    return result;
}

function determineSubscribers(parsedXML) {
    const subscribers = [];
    const shipments = parsedXML?.ShippingData?.Shipment || [];

    shipments.forEach((shipment) => {
        if (shipment.status[0] === 'Delivered') {
            subscribers.push({
                subscriberId: shipment.subscriberId[0],
                message: `Shipment ${shipment.trackingNumber[0]} has been delivered.`
            });
        }
    });

    return subscribers;
}
async function notifySubscribers(subscribers) {
   /* const aioEvents = new AdobeIoEvents({
        orgId: 'YOUR_ORG_ID',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        technicalAccountId: 'YOUR_TECHNICAL_ACCOUNT_ID',
        privateKey: 'YOUR_PRIVATE_KEY'
    });

    for (const subscriber of subscribers) {
        await aioEvents.publishEvent({
            providerId: 'YOUR_PROVIDER_ID',
            eventCode: 'descartes.shipment.delivered',
            payload: subscriber
        });
    }*/
}

async function main(params) {
    try {
        const xmlData = await fetchDescartesXML();
        const parsedData = await parseXML(xmlData);
        const subscribers = determineSubscribers(parsedData);
       // await notifySubscribers(subscribers);

        return {
            statusCode: 200,
            body: parsedData,
        };
      //  return { status: 'Success', message: 'Subscribers notified' };
    } catch (error) {
        console.error('Error:', error);
        return { status: 'Error', message: error.message };
    }
}

exports.main = main;