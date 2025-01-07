const fetch = require('node-fetch')
const hubspotWebhookUrl = "https://services-qa.heritagelandscapesupplygroup.com/notifications/";
async function main (params) {
    switch (params['type']) {
        case "com.adobe.commerce.observer.hold_order_notification":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['order']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'HoldOrderNotificationEmailRequest'
                if(params['data']['value']['order']['storeName'] == 'HACHIK'){
                    var storeFrontName = 'Hachik Distributors';
                }else if(params['data']['value']['order']['storeName'] == 'Bel Aqua'){
                    var storeFrontName = 'Bel-Aqua Pool Supply';
                }else {
                    var storeFrontName = params['data']['value']['order']['storeName'];
                }
                if(params['data']['value']['order']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['order']['receiverEmail'],
                        "cc": [],
                        "bcc": [],
                        "receiverName": params['data']['value']['order']['receiverName'],
                        "customerName": params['data']['value']['order']['customerName'],
                        "loginUrl": params['data']['value']['order']['loginUrl'],
                        "createdAt": params['data']['value']['order']['createdAt'],
                        "emailCustomerNote": " ",
                        "storeName": storeFrontName,
                        "HoldOrderNotificationItems": params['data']['value']['order']['HoldOrderNotificationItems'],
                        "subTotal": params['data']['value']['order']['subTotal'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['order']['businessGroup'],
                        "brandName": params['data']['value']['order']['storeName']
                    }
                }

                var hubspotOpts = {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(payload)
                }
                const message = await fetch(hubspotWebhook, hubspotOpts)
                const resp = await message.text();
                if(resp === 'Error'){
                    const response = {
                        statusCode: 500,
                        body: { data: resp, message: 'Something went wrong. Please check the payload or reach the team.' }
                    }
                    return response
                }else if(resp === 'Unauthorized') {
                    const response = {
                        statusCode: 401,
                        body: { data: resp, message: 'Something went wrong. Please check the access token and configurations.' }
                    }
                    return response
                }
                else{
                    const response = {
                        statusCode: 200,
                        body: { message: resp }
                    }
                    return response
                }
            }catch (e) {
                return {
                    statusCode: 500,
                    body:{
                        message: e
                    }
                }
            }
            break;
        case "com.adobe.commerce.observer.hold_order_approval_notification":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['order']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'HoldOrderApprovedEmailRequest'
                if(params['data']['value']['order']['storeName'] == 'HACHIK'){
                    var storeFrontName = 'Hachik Distributors';
                }else if(params['data']['value']['order']['storeName'] == 'Bel Aqua'){
                    var storeFrontName = 'Bel-Aqua Pool Supply';
                }else {
                    var storeFrontName = params['data']['value']['order']['storeName'];
                }
                if(params['data']['value']['order']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['order']['receiverEmail'],
                        "cc": [],
                        "bcc": [],
                        "receiverName": params['data']['value']['order']['receiverName'],
                        "storeEmail": params['data']['value']['order']['storeEmail'],
                        "storePhone": params['data']['value']['order']['storePhone'],
                        "storeHours": params['data']['value']['order']['storeHours'],
                        "createdAt": params['data']['value']['order']['createdAt'],
                        "emailCustomerNote": " ",
                        "storeName": storeFrontName,
                        "HoldOrderApprovedItems": params['data']['value']['order']['HoldOrderNotificationItems'],
                        "subTotal": params['data']['value']['order']['subTotal'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['order']['businessGroup'],
                        "brandName": params['data']['value']['order']['storeName']
                    }
                }

                var hubspotOpts = {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(payload)
                }
                const message = await fetch(hubspotWebhook, hubspotOpts)
                const resp = await message.text();
                if(resp == 'ERROR'){
                    const response = {
                        statusCode: 500,
                        body: { data: resp, message: 'Something went wrong. Please check the payload or reach the team.' }
                    }
                    return response
                }else if(resp === 'Unauthorized') {
                    const response = {
                        statusCode: 401,
                        body: { data: resp, message: 'Something went wrong. Please check the access token and configurations.' }
                    }
                    return response
                }else{
                    const response = {
                        statusCode: 200,
                        body: { message: resp }
                    }
                    return response
                }
            }catch (e) {
                return {
                    statusCode: 500,
                    body:{
                        message: e
                    }
                }
            }
            break;
        case "com.adobe.commerce.observer.hold_order_cancel_notification":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['order']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'HoldOrderCancelledEmailNotificationRequest'
                if(params['data']['value']['order']['storeName'] == 'HACHIK'){
                    var storeFrontName = 'Hachik Distributors';
                }else if(params['data']['value']['order']['storeName'] == 'Bel Aqua'){
                    var storeFrontName = 'Bel-Aqua Pool Supply';
                }else {
                    var storeFrontName = params['data']['value']['order']['storeName'];
                }
                if(params['data']['value']['order']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['order']['receiverEmail'],
                        "cc": [],
                        "bcc": [],
                        "receiverName": params['data']['value']['order']['receiverName'],
                        "storeEmail": params['data']['value']['order']['storeEmail'],
                        "storePhone": params['data']['value']['order']['storePhone'],
                        "storeHours": params['data']['value']['order']['storeHours'],
                        "createdAt": params['data']['value']['order']['createdAt'],
                        "emailCustomerNote": " ",
                        "storeName": storeFrontName,
                        "HoldOrderItems": params['data']['value']['order']['HoldOrderNotificationItems'],
                        "subTotal": params['data']['value']['order']['subTotal'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['order']['businessGroup'],
                        "brandName": params['data']['value']['order']['storeName']
                    }
                }

                var hubspotOpts = {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(payload)
                }
                const message = await fetch(hubspotWebhook, hubspotOpts)
                const resp = await message.text();
                if(resp == 'ERROR'){
                    const response = {
                        statusCode: 500,
                        body: { data: resp, message: 'Something went wrong. Please check the payload or reach the team.' }
                    }
                    return response
                }else if(resp === 'Unauthorized') {
                    const response = {
                        statusCode: 401,
                        body: { data: resp, message: 'Something went wrong. Please check the access token and configurations.' }
                    }
                    return response
                }else{
                    const response = {
                        statusCode: 200,
                        body: {message: resp}
                    }
                    return response
                }
            }catch (e) {
                return {
                    statusCode: 500,
                    body:{
                        message: e
                    }
                }
            }
            break;
        case "com.adobe.commerce.observer.edit_order_failed":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['orderData']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'OrderUpdateFailure'
                if(params['data']['value']['orderData']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['orderData']['customerEmailId'],
                        "cc": [],
                        "bcc": [],
                        "erpOrderID": params['data']['value']['orderData']['erpId'],
                        "orderID": params['data']['value']['orderData']['orderID'],
                        "orderBranch": params['data']['value']['orderData']['orderBranch'],
                        "orderBranchBusinesshours": params['data']['value']['orderData']['orderBranchBusinesshours'],
                        "orderBranchPhone": params['data']['value']['orderData']['orderBranchPhone'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['orderData']['businessGroup'],
                        "brandName": params['data']['value']['orderData']['brandName']
                    }
                }

                var hubspotOpts = {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(payload)
                }
                const message = await fetch(hubspotWebhook, hubspotOpts)
                const resp = await message.text();
                if(resp == 'ERROR'){
                    const response = {
                        statusCode: 500,
                        body: { data: resp, message: 'Something went wrong. Please check the payload or reach the team.' }
                    }
                    return response
                }else if(resp === 'Unauthorized') {
                    const response = {
                        statusCode: 401,
                        body: { data: resp, message: 'Something went wrong. Please check the access token and configurations.' }
                    }
                    return response
                }else{
                    const response = {
                        statusCode: 200,
                        body: { message: resp }
                    }
                    return response
                }
            }catch (e) {
                return {
                    statusCode: 500,
                    body:{
                        message: e
                    }
                }
            }
            break;
        case "com.adobe.commerce.observer.parts_req_for_quote":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['quoteData']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'PartsRequestForQuoteRequest'
                if(params['data']['value']['quoteData']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <webmaster@heritageplus.com> "
                }else {
                    var fromAddress = "Heritage Pool+ <webmaster@heritageplus.com> "
                }
                var copyTo = params['data']['value']['quoteData']['cc'];
                if(params['data']['value']['quoteData']['isReceipt'] == 'no'){
                    var cc = [copyTo]
                }else {
                    var cc = [];
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['quoteData']['customerEmailId'],
                        "cc": cc,
                        "bcc": [],
                        "isReceipt": params['data']['value']['quoteData']['isReceipt'],
                        "receiverName": params['data']['value']['quoteData']['receiverName'],
                        "branchName": params['data']['value']['quoteData']['branchName'],
                        "companyName": params['data']['value']['quoteData']['companyName'],
                        "customerCode": params['data']['value']['quoteData']['customerCode'],
                        "email": params['data']['value']['quoteData']['email'],
                        "manufacturer": params['data']['value']['quoteData']['manufacturer'],
                        "partNumber": params['data']['value']['quoteData']['partNumber'],
                        "partDetails": params['data']['value']['quoteData']['partDetails'],
                        "assemblyName": params['data']['value']['quoteData']['assemblyName'],
                        "linkUrl": params['data']['value']['quoteData']['linkUrl'],
                        "fromEmail": fromAddress,
                        "emailDomain": "Default Domain",
                        "businessGroup": params['data']['value']['quoteData']['businessGroup'],
                        "brandName": params['data']['value']['quoteData']['storeName']
                    }
                }

                var hubspotOpts = {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(payload)
                }
                const message = await fetch(hubspotWebhook, hubspotOpts)
                const resp = await message.text();
                if(resp == 'Error'){
                    const response = {
                        statusCode: 500,
                        body: { data: payload, message: 'Something went wrong. Please check the payload or reach the team.' }
                    }
                    return response
                }else if(resp === 'Unauthorized') {
                    const response = {
                        statusCode: 401,
                        body: { data: resp, message: 'Something went wrong. Please check the access token and configurations.' }
                    }
                    return response
                }else{
                    const response = {
                        statusCode: 200,
                        body: { message: resp }
                    }
                    return response
                }
            }catch (e) {
                return {
                    statusCode: 500,
                    body:{
                        message: e
                    }
                }
            }
            break;
        case "com.adobe.commerce.observer.order_notification":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['order']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'EditOrderUpdateEmailRequest'
                if(params['data']['value']['order']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['order']['customerEmailId'],
                        "cc": params['data']['value']['order']['cc'],
                        "bcc": params['data']['value']['order']['bcc'],
                        "incrementId": params['data']['value']['order']['incrementId'],
                        "erpOrderID": params['data']['value']['order']['erpOrderID'],
                        "isEditOrder": params['data']['value']['order']['isEditOrder'],
                        "orderBranch": params['data']['value']['order']['orderBranch'],
                        "email": params['data']['value']['order']['email'],
                        "billToFirstName": params['data']['value']['order']['billToFirstName'],
                        "customerCode": params['data']['value']['order']['customerCode'],
                        "billToStreet1": params['data']['value']['order']['billToStreet1'],
                        "billToStreet2": params['data']['value']['order']['billToStreet2'],
                        "billToCity": params['data']['value']['order']['billToCity'],
                        "billToRegion": params['data']['value']['order']['billToRegion'],
                        "billToPostcode": params['data']['value']['order']['billToPostcode'],
                        "shipToFirstName": params['data']['value']['order']['shipToFirstName'],
                        "shipToStreet1": params['data']['value']['order']['shipToStreet1'],
                        "shipToStreet2": params['data']['value']['order']['shipToStreet2'],
                        "shipToCity": params['data']['value']['order']['shipToCity'],
                        "shipToRegion": params['data']['value']['order']['shipToRegion'],
                        "shipToPostcode": params['data']['value']['order']['shipToPostcode'],
                        "orderedBy": params['data']['value']['order']['orderedBy'],
                        "shipToTelephone": params['data']['value']['order']['shipToTelephone'],
                        "shipToShipvia": params['data']['value']['order']['shipToShipvia'],
                        "poNumber": params['data']['value']['order']['poNumber'],
                        "jobName": params['data']['value']['order']['jobName'],
                        "requestedDate": params['data']['value']['order']['requestedDate'],
                        "createdAtFormatted": params['data']['value']['order']['createdAtFormatted'],
                        "isShipComplete": params['data']['value']['order']['isShipComplete'],
                        "isShipRoute": params['data']['value']['order']['isShipRoute'],
                        "shipRoute": params['data']['value']['order']['shipRoute'],
                        "orderNotes": params['data']['value']['order']['orderNotes'],
                        "EditOrderItems": params['data']['value']['order']['EditOrderItems'],
                        "subTotal": params['data']['value']['order']['subTotal'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['order']['businessGroup'],
                        "brandName": params['data']['value']['order']['brandName']
                    }
                }

                var hubspotOpts = {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(payload)
                }
                const message = await fetch(hubspotWebhook, hubspotOpts)
                const resp = await message.text();
                if(resp == 'Error'){
                    const response = {
                        statusCode: 500,
                        body: { data: payload, message: 'Something went wrong. Please check the payload or reach the team.' }
                    }
                    return response
                }else if(resp === 'Unauthorized') {
                    const response = {
                        statusCode: 401,
                        body: { data: resp, message: 'Something went wrong. Please check the access token and configurations.' }
                    }
                    return response
                }else{
                    const response = {
                        statusCode: 200,
                        body: { message: resp}
                    }
                    return response
                }
            }catch (e) {
                return {
                    statusCode: 500,
                    body:{
                        message: e
                    }
                }
            }
            break;
        default:
            return {
                statusCode: 500,
                body:{
                    message: 'Something went wrong in event registration or in runtime action'
                }
            }
    }
}