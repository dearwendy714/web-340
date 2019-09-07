/*
============================================
; Title:  Portillo-exercise-5.3.js
; Author: Professor Krasso
; Date:   4 September 2019
; Description: Demonstrates the Pug view engine.
;===========================================
*/

var express = require('express');
var http = require('http');
var pug = require('pug');
var path = require('path');

var app = eess();

// setting the route to the views directory
app.set('views', path.resolve(__dirname,'views'));

//specifying to express that we want to use the pug view engine
app.set('view engine', 'pug');

// rendering our content to index.pug
app.get('/', function(req, res) {
    res.render('index', {
        message: "Hello Gorgeous Pug World"
    });
});


// creating our server on port 3000
http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000');
});
