const fetch = require('node-fetch');
const stateLib = require('@adobe/aio-lib-state');

const oAuthTokenUrl = "https://dev-commquotes-apiservices.heritagedesignservices.com/oauth/token";
const orderSubUrl = "https://dev-commquotes-apiservices.heritagedesignservices.com/v1/quote/hplusordersub";


async function getStoredToken(){
    // init with implicit I/O Runtime credentials, default region is 'amer'.
    const state = await stateLib.init();

    // get
    const res = await state.get('token') // res = { value, expiration }
    const value = res.value

    if(value){
        return value;
    }else{
        return null;
    }
}
async function getNewToken(client_id,client_secrect){
    var options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "grant_type":"client_credentials",
            "client_id":client_id,
            "client_screct":client_secrect
        })
    }

    const response = await fetch(oAuthTokenUrl, options);

    if(response.ok){
        const tokenData = response.json();
        await state.put('token',token.token, { ttl: (token.expires_in - 60)});
        return token.token;
    }

    return null;

}
async function main (params) {

    var token = getStoredToken();
    var isNewToken = false;
    if(!token){
        token = getNewToken(params.client_id,params.client_secrect);
        if(!token){
            return {
                statusCode: 400,
                body:{
                    message:"unable to fetch token"
                }
            };
        }else{
            return {
                statusCode: 200,
                body:{
                    message:"success"
                }
            };
        }
        isNewToken = true;
    }

    // var options = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //         {"magentoOrderId":"378896","transactionId":"a5843cf8-b096-4081-825c-85c4b7875248","status":"success","message":"Order is Created with Web Reference ID 111000000094"}
    //     })
    // }

    // const tokenData = await fetch(orderSubUrl, options);
    // const token = tokenData.json();

    return {
        statusCode: 200,
        body:{
            token: token,
            isNewToken:isNewToken
        }
    }
}
exports.main = main;