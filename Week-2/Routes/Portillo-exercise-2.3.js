/*
============================================
; Title:  Portillo-exercise-2.3
; Author: Professor Krasso
; Date:   13 August 2019
; Modified By: Wendy Portillo
; Description:  Routes
;===========================================
*/

//Header

var header = require('../../header.js');
console.log(header.display("Wendy", "Portillo", "Exercise 1.3"));
console.log('\n');


// Create require statement to use express
var express = require("express");

// Create require statement for http library
var http = require("http");

// Local variable for Express app
var app = express();

// Route interceptors

// Root route, function features request and has a response
// Homepage create
app.get('/', function(req, res)
{
    res.end('Welcome to the homepage.\n');
});

// About Page create
app.get('/about', function(req, res)
{
    res.end('Welcome to the page.\n');
});

// Contact page create
app.get('/contact', function(req,res)
{
    res.end('Welcome to the contact page.\n');
});

// Bad page 404
app.use(function(req, res)
{
    res.statusCode = 404;
    res.end('404!\n');
});

// Create a node server, listening on port 8080
http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
});

// end program
