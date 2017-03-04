require('./config/setup.js'); //Required environment setup

var slack = require('./config/slack.js');
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
