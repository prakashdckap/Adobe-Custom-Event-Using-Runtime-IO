# Adobe-Custom-Event-Using-Runtime-IO
Creating a New Action Using Adobe I/O Runtime to Trigger Multiple I/O Events

After cloning, run npm install.

**Overview**
This guide outlines the process of creating and managing a new action using Adobe I/O Runtime. The API endpoint you create directly calls Adobe I/O Runtime, which then triggers multiple events based on the cmd parameter extracted from the XML. Depending on the value of cmd, different events will be triggered. For example, if cmd is 6, it will trigger the Parsed XML Event; if cmd is 5, it will trigger the Magento Notification Adobe Event. The event data will be sent to the webhook provided during event registration.
