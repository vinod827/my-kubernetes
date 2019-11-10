'use-strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.get('/', function (request, response){
    response.send('Hi, Welcome to ChatBot on Kubernetes');
});

app.listen(app.get('port'), function(){
    console.log('Chatbot listening on port#'+app.get('port'));
});






