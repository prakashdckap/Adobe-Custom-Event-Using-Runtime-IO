const fetch = require('node-fetch')
const hubspotWebhookUrl = "https://services-qa.heritagelandscapesupplygroup.com/notifications/";
// main function that will be executed by Adobe I/O Runtime
async function main (params) {
    if(params['type'] == 'com.adobe.commerce.observer.customer_email_updated'){
        const header = {
            'Content-Type': 'application/json',
            'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
            'Authorization': 'Bearer '+params['data']['value']['customer']['token']
        }
        const hubspotWebhook = hubspotWebhookUrl+'EmailAddressChangeRequest'
        if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
            var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
        }else {
            var fromAddress = "Heritage+ <support@heritageplus.com> "
        }
        try{
            const payload = {
                "data": {
                    "customerEmailId": params['data']['value']['customer']['email'],
                    "customerNewEmailId": params['data']['value']['customer']['updatedEmail'],
                    "customerName": params['data']['value']['customer']['name'],
                    "storeEmail": params['data']['value']['customer']['storeEmail'],
                    "storePhone": params['data']['value']['customer']['storePhone'],
                    "fromEmail": fromAddress,
                    "emailDomain": "DefaultDomain",
                    "businessGroup": params['data']['value']['customer']['businessGroup'],
                    "brandName": params['data']['value']['customer']['storeName']
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
    }else if(params['type'] == 'com.adobe.commerce.observer.customer_password_updated'){
        const header = {
            'Content-Type': 'application/json',
            'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
            'Authorization': 'Bearer '+params['data']['value']['customer']['token']
        }
        const hubspotWebhook = hubspotWebhookUrl+'PasswordChangedRequest'
        try{
            if(params['data']['value']['customer']['storeName'] == 'HACHIK'){
                var storeFrontName = 'Hachik Distributors';
            }else if(params['data']['value']['customer']['storeName'] == 'Bel Aqua'){
                var storeFrontName = 'Bel-Aqua Pool Supply';
            }else {
                var storeFrontName = params['data']['value']['customer']['storeName'];
            }
            if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
                var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
            }else {
                var fromAddress = "Heritage+ <support@heritageplus.com> "
            }
            const payload = {
                "data": {
                    "customerEmailId": params['data']['value']['customer']['email'],
                    "customerName": params['data']['value']['customer']['name'],
                    "storeName": storeFrontName,
                    "fromEmail": fromAddress,
                    "emailDomain": "DefaultDomain",
                    "businessGroup": params['data']['value']['customer']['businessGroup'],
                    "brandName": params['data']['value']['customer']['storeName']
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
    }else if(params['type'] == 'com.adobe.commerce.observer.customer_password_reset'){
        const header = {
            'Content-Type': 'application/json',
            'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
            'Authorization': 'Bearer '+params['data']['value']['customerData']['token']
        }
        const hubspotWebhook = hubspotWebhookUrl+'ForgotPasswordRequest'
        if(params['data']['value']['customerData']['businessGroup'] == 'hpsg'){
            var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
        }else {
            var fromAddress = "Heritage+ <support@heritageplus.com> "
        }
        try{
            const payload = {
                "data": {
                    "customerEmailId": params['data']['value']['customerData']['email'],
                    "resetLink": params['data']['value']['customerData']['resetLink'],
                    "storeName": params['data']['value']['customerData']['storeName'],
                    "storeURL": params['data']['value']['customerData']['storeUrl'],
                    "fromEmail": fromAddress,
                    "emailDomain": "DefaultDomain",
                    "businessGroup": params['data']['value']['customerData']['businessGroup'],
                    "brandName": params['data']['value']['customerData']['storeName']
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
    }else if(params['type'] == 'com.adobe.commerce.observer.new_admin_user_created'){
        const header = {
            'Content-Type': 'application/json',
            'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
            'Authorization': 'Bearer '+params['data']['value']['user']['token']
        }
        const hubspotWebhook = hubspotWebhookUrl+'NewUserNotificationRequest'
        try{
            const payload = {
                "data": {
                    "customerEmailId": params['data']['value']['user']['customerEmailId'],
                    "firstName": params['data']['value']['user']['firstName'],
                    "lastName": params['data']['value']['user']['lastName'],
                    "userEmail": params['data']['value']['user']['user_email'],
                    "userName": params['data']['value']['user']['user_name'],
                    "storeEmail": params['data']['value']['user']['storeEmail'],
                    "storePhone": params['data']['value']['user']['storePhone'],
                    "storeFrontendName": params['data']['value']['user']['storeName'],
                    "fromEmail": "Heritage Support <support@heritageplus.com>",
                    "emailDomain": "DefaultDomain",
                    "businessGroup": "hlsg",
                    "brandName": ""
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
    }else if(params['type'] == 'com.adobe.commerce.observer.bad_image'){
        const header = {
            'Content-Type': 'application/json',
            'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
            'Authorization': 'Bearer '+params['data']['value']['image']['token']
        }
        const hubspotWebhook = hubspotWebhookUrl+'BadImageReported'
        if(params['data']['value']['image']['businessGroup'] == 'hpsg'){
            var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
        }else {
            var fromAddress = "Heritage+ <support@heritageplus.com> "
        }
        try{
            const payload = {
                "data": {
                    "emailId": params['data']['value']['image']['emailId'],
                    "cc": ["dckaptesting13@gmail.com"],
                    "bcc": [],
                    "productURL": params['data']['value']['image']['productURL'],
                    "productID": params['data']['value']['image']['productID'],
                    "storeName": params['data']['value']['image']['storeName'],
                    "details": params['data']['value']['image']['details'],
                    "reportingEmail": params['data']['value']['image']['reportingEmail'],
                    "wrongImageYesNo": params['data']['value']['image']['wrongImageYesNo'],
                    "fromEmail": fromAddress,
                    "emailDomain": "DefaultDomain",
                    "businessGroup": params['data']['value']['image']['businessGroup'],
                    "brandName": params['data']['value']['image']['storeName']
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
    }else if(params['type'] == 'com.adobe.commerce.observer.customer_active'){
        const header = {
            'Content-Type': 'application/json',
            'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
            'Authorization': 'Bearer '+params['data']['value']['customer']['token']
        }
        const hubspotWebhook = hubspotWebhookUrl+'CustomerActive'
        if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
            var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
        }else {
            var fromAddress = "Heritage+ <support@heritageplus.com> "
        }
        try{
            if(params['data']['value']['customer']['storeName'] == 'HACHIK'){
                var storeFrontName = 'Hachik Distributors';
            }else if(params['data']['value']['customer']['storeName'] == 'Bel Aqua'){
                var storeFrontName = 'Bel-Aqua Pool Supply';
            }else {
                var storeFrontName = params['data']['value']['customer']['storeName'];
            }
            const payload = {
                "data": {
                    "customerEmailId": params['data']['value']['customer']['customerEmailId'],
                    "customerName": params['data']['value']['customer']['customerName'],
                    "storeName": storeFrontName,
                    "storeURL": params['data']['value']['customer']['storeURL'],
                    "fromEmail": fromAddress,
                    "emailDomain": "DefaultDomain",
                    "businessGroup": params['data']['value']['customer']['businessGroup'],
                    "brandName": params['data']['value']['customer']['storeName']
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
    }else if(params['type'] == 'com.adobe.commerce.observer.customer_inactive'){
        const header = {
            'Content-Type': 'application/json',
            'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
            'Authorization': 'Bearer '+params['data']['value']['customer']['token']
        }
        const hubspotWebhook = hubspotWebhookUrl+'CustomerInactive'
        if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
            var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
        }else {
            var fromAddress = "Heritage+ <support@heritageplus.com> "
        }
        try{
            if(params['data']['value']['customer']['storeName'] == 'HACHIK'){
                var storeFrontName = 'Hachik Distributors';
            }else if(params['data']['value']['customer']['storeName'] == 'Bel Aqua'){
                var storeFrontName = 'Bel-Aqua Pool Supply';
            }else {
                var storeFrontName = params['data']['value']['customer']['storeName'];
            }

            const payload = {
                "data": {
                    "customerEmailId": params['data']['value']['customer']['customerEmailId'],
                    "customerName": params['data']['value']['customer']['customerName'],
                    "storeName": storeFrontName,
                    "storeURL": params['data']['value']['customer']['storeURL'],
                    "fromEmail": fromAddress,
                    "emailDomain": "DefaultDomain",
                    "businessGroup": params['data']['value']['customer']['businessGroup'],
                    "brandName": params['data']['value']['customer']['storeName']
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
    }
}

exports.main = main