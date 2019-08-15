/*
============================================
; Title:  Portillo-exercise-2.2
; Author: Professor Krasso
; Date:   13 August 2019
; Modified By: Wendy Portillo
; Description:  Hello World with Express
;===========================================
*/

//Start

// requiring the express and http modules
var express = require('express');
var http = require('http');

// assigning the express function to a variable
var app = express();

app.use(function(request, response){
    console.log('In comes a request to: ' + request.url);

    response.end('Hello World\n');
});

// creating my server
http.createServer(app).listen(8080);


