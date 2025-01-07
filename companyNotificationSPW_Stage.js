const fetch = require('node-fetch')
const hubspotWebhookUrl = "https://services-qa.heritagelandscapesupplygroup.com/notifications/";
async function main (params) {
    switch (params['type']) {
        case "com.adobe.commerce.observer.companyadmin_changed_to_member":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['customer']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'CompanyAdminChangedToMemberRequest'
                if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['customer']['email'],
                        "customerName": params['data']['value']['customer']['name'],
                        "companyName": params['data']['value']['customer']['companyName'],
                        "storeName": params['data']['value']['customer']['storeName'],
                        "storeUrl": params['data']['value']['customer']['storeURL'],
                        "companyAdminEmail": params['data']['value']['customer']['companyAdminEmail'],
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
            break;
        case "com.adobe.commerce.observer.customer_assigned_as_company_admin":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['customer']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'AssignCompanyAdmin'
                if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['customer']['email'],
                        "customerName": params['data']['value']['customer']['name'],
                        "companyName": params['data']['value']['customer']['companyName'],
                        "loginURL": params['data']['value']['customer']['loginURL'],
                        "storeName": params['data']['value']['customer']['storeName'],
                        "storeURL": params['data']['value']['customer']['storeURL'],
                        "companyAdminEmail": params['data']['value']['customer']['companyAdminEmail'],
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
            break;
        case "com.adobe.commerce.observer.company_admin_inactive":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['customer']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'CompanyAdminSetInactive'
                if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['customer']['email'],
                        "customerName": params['data']['value']['customer']['name'],
                        "companyNameAccount": params['data']['value']['customer']['companyName'],
                        "storeName": params['data']['value']['customer']['storeName'],
                        "storeURL": params['data']['value']['customer']['storeURL'],
                        "companyAdminEmail": params['data']['value']['customer']['companyAdminEmail'],
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
            break;
        case "com.adobe.commerce.observer.company_status_rejected":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['companyDetails']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'CompanyStatusRejectedRequest'
                if(params['data']['value']['companyDetails']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['companyDetails']['customerEmail'],
                        "companyName": params['data']['value']['company']['company_name'],
                        "cc": params['data']['value']['companyDetails']['Cc'],
                        "bcc": params['data']['value']['companyDetails']['Bcc'],
                        "supportEmail": params['data']['value']['companyDetails']['supportEmail'],
                        "customerPageUrl": params['data']['value']['companyDetails']['customerPageURL'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['companyDetails']['businessGroup'],
                        "brandName": params['data']['value']['companyDetails']['storeName']
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
        case "com.adobe.commerce.observer.company_status_approved":
            const hubspotWebhook = hubspotWebhookUrl+'CompanyApprovalEmailRequest'
            if(params['data']['value']['companyDetails']['businessGroup'] == 'hpsg'){
                var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
            }else {
                var fromAddress = "Heritage+ <support@heritageplus.com> "
            }
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['companyDetails']['token']
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['companyDetails']['customerEmail'],
                        "cc": params['data']['value']['companyDetails']['Cc'],
                        "bcc": params['data']['value']['companyDetails']['Bcc'],
                        "companyName": params['data']['value']['company']['company_name'],
                        "loginUrl": params['data']['value']['companyDetails']['loginUrl'],
                        "fromEmail":fromAddress,
                        "emailDomain":"DefaultDomain",
                        "businessGroup": params['data']['value']['companyDetails']['businessGroup'],
                        "brandName": params['data']['value']['companyDetails']['storeName']
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
        case "com.adobe.commerce.observer.company_status_pending_approval":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['companyDetails']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'PendingApproval'
                if(params['data']['value']['companyDetails']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['companyDetails']['customerEmail'],
                        "cc": params['data']['value']['companyDetails']['Cc'],
                        "bcc": params['data']['value']['companyDetails']['Bcc'],
                        "companyName": params['data']['value']['company']['company_name'],
                        "customerPageURL": params['data']['value']['companyDetails']['customerPageURL'],
                        "supportEmail": params['data']['value']['companyDetails']['supportEmail'],
                        "fromEmail":fromAddress,
                        "emailDomain":"DefaultDomain",
                        "businessGroup": params['data']['value']['companyDetails']['businessGroup'],
                        "brandName": params['data']['value']['companyDetails']['storeName']
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
        case "com.adobe.commerce.observer.company_status_pending":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['companyDetails']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'CompanyAccountStatusPendingRequest'
                if(params['data']['value']['companyDetails']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['companyDetails']['customerEmail'],
                        "cc": params['data']['value']['companyDetails']['Cc'],
                        "bcc": params['data']['value']['companyDetails']['Bcc'],
                        "companyName": params['data']['value']['company']['company_name'],
                        "storeName": params['data']['value']['companyDetails']['storeName'],
                        "storeUrl": params['data']['value']['companyDetails']['storeUrl'],
                        "supportEmail": params['data']['value']['companyDetails']['supportEmail'],
                        "fromEmail":fromAddress,
                        "emailDomain":"DefaultDomain",
                        "businessGroup": params['data']['value']['companyDetails']['businessGroup'],
                        "brandName": params['data']['value']['companyDetails']['storeName']
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
        case "com.adobe.commerce.observer.customer_assigned_to_company":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['customer']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'NewUserLinkedToCompany'
                if(params['data']['value']['customer']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['customer']['email'],
                        "customerName": params['data']['value']['customer']['name'],
                        "companyName": params['data']['value']['customer']['companyName'],
                        "loginURL": params['data']['value']['customer']['loginURL'],
                        "customerURL": params['data']['value']['customer']['customerPageURL'],
                        "storeName": params['data']['value']['customer']['storeName'],
                        "storeURL": params['data']['value']['customer']['storeURL'],
                        "companyAdminEmail": params['data']['value']['customer']['companyAdminEmail'],
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
            break;
        case "com.adobe.commerce.observer.new_company_registration":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['companyData']['token']
                }
                const hubspotWebhook = hubspotWebhookUrl+'NewCompanyRegistration'
                if(params['data']['value']['companyData']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['companyData']['customerEmail'],
                        "cc": params['data']['value']['companyData']['Cc'],
                        "bcc": params['data']['value']['companyData']['Bcc'],
                        "companyName": params['data']['value']['companyData']['companyName'],
                        "storeName": params['data']['value']['companyData']['storeName'],
                        "supportEmail": params['data']['value']['companyData']['supportEmail'],
                        "customerName": params['data']['value']['companyData']['customerName'],
                        "customerEmail": params['data']['value']['companyData']['customerEmail'],
                        "companyStreet": params['data']['value']['companyData']['companyStreet'],
                        "companyCity": params['data']['value']['companyData']['companyCity'],
                        "companyState": params['data']['value']['companyData']['companyState'],
                        "companyZipCode": params['data']['value']['companyData']['companyZipCode'],
                        "companyPhone": params['data']['value']['companyData']['companyPhone'],
                        "code": params['data']['value']['companyData']['code'],
                        "branch": params['data']['value']['companyData']['branch'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['companyData']['businessGroup'],
                        "brandName": params['data']['value']['companyData']['storeName']
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
        case "com.adobe.commerce.observer.new_customer_linked_to_company":
            try{
                const header = {
                    'Content-Type': 'application/json',
                    'X-Azure-FDID':'8618ad3e-8d3b-49c3-9958-995f9af1b7c7',
                    'Authorization': 'Bearer '+params['data']['value']['customerData']['token']
                }
                if(params['data']['value']['customerData']['storeName'] == 'HACHIK'){
                    var storeFrontName = 'Hachik Distributors';
                }else if(params['data']['value']['customerData']['storeName'] == 'Bel Aqua'){
                    var storeFrontName = 'Bel-Aqua Pool Supply';
                }else {
                    var storeFrontName = params['data']['value']['customerData']['storeName'];
                }
                if(params['data']['value']['customerData']['businessGroup'] == 'hpsg'){
                    var fromAddress = "Heritage Pool+ <customersupport@heritagepoolplus.com> "
                }else {
                    var fromAddress = "Heritage+ <support@heritageplus.com> "
                }
                const hubspotWebhook = hubspotWebhookUrl+'NewSubUserWelcomeEmail'
                const payload = {
                    "data": {
                        "customerEmailId": params['data']['value']['customerData']['customerEmailId'],
                        "customerName": params['data']['value']['customerData']['customerName'],
                        "storeName": storeFrontName,
                        "storeURL": params['data']['value']['customerData']['storeURL'],
                        "loginURL": params['data']['value']['customerData']['loginURL'],
                        "fromEmail": fromAddress,
                        "emailDomain": "DefaultDomain",
                        "businessGroup": params['data']['value']['customerData']['businessGroup'],
                        "brandName": params['data']['value']['customerData']['storeName']
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
        default:
            return {
                statusCode: 500,
                body:{
                    message: 'Something went wrong in event registration or in runtime action'
                }
            }
    }
}