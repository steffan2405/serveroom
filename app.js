// ini buat ambek peralatan kalo nak beken server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//ini untuk bkin identitas ny 
var port = process.env.PORT || 0989;

// ini untuk ngebaco data jadi json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ini untuk 
app.listen(port, function(){
    console.log('app listening on port: '+port);
});