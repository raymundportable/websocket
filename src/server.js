var express = require('express');
var WebSocket = require('ws')
var app = express();
var priceData = require("./mockpricedata");

app.use(express.static('public')); //Serves resources from public folder

const wss = new WebSocket.Server({ port: 8081 })
wss.on('connection', async ws => {
    // Fill in code that sends price data to the client
    // Hint: use priceData.getLatestBitcoinPrice() to get the latest price
})

var server = app.listen(8080);