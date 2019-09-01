/*
============================================
; Title:  Portillo-exercise-4.3.js
; Author: Professor Krasso
; Date:   1 September 2019
; Description: Creating JSON API's
;===========================================
*/

var express = require('express');
var http = require('http');

var app = express();

// creating the git request for the customer ID
app.get("/hello/:id", function (req, res)  {

    var id = (parseInt(req.params.id, 10));

    // creating the output values for the request
    res.json({
        firstName: "Wendy",
        lastName: "Portillo",
        email: "dearwendy714@gmail.com",
        employee: id
    });
});

// creating local server
http.createServer(app).listen(8080, function () {
    console.log('Application started on port 8080');
});
