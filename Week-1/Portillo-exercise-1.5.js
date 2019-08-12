/*
============================================
; Title:  Portillo-server.js
; Author: Professor Krasso
; Date:   11 August 2019
; Modified By: Wendy Portillo
; Description: creating my first server
;===========================================
*/

//Header

var header = require('../header.js');
console.log(header.display("Wendy", "Portillo", "Exercise 1.5"));
console.log('\n');


//Variable declaration:

var http = require("http");

function processRequest(req, res) {

// server body message
var body = "Hello! And welcome to my very first NodeJs server, created for WEB-340.";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080)
