const fetch = require('node-fetch')
const adobeCommerceUrl = "https://landscapehubqa.dckap.co/rest/V1/tracking-Information/save";
export async function main(params) {
    try{
            const header = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer vt8q809jyfm4d541jhdv8woxw2o163uc'
            }
            const payload = {
                "data": params["__ow_body"]
            }
            var adobeCommerceOpts = {
                method: 'POST',
                headers: header,
                body: JSON.stringify(payload)
            }
            const message = await fetch(adobeCommerceUrl, adobeCommerceOpts)
            const resp = await message.text();
            const response = {
                statusCode: 200,
                body: { messageFromAdobe: resp }
            }
            return response

    }catch (e) {
        return {
            statusCode: 500,
            body:{
                message: e
            }
        }
    }
}
