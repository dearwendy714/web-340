/*
============================================
; Title:  Portillo-exercise-2.4
; Author: Professor Krasso
; Date:   13 August 2019
; Modified By: Wendy Portillo
; Description:  EJS Views
;===========================================
*/

//Header

var header = require('../../header.js');
console.log(header.display("Wendy", "Portillo", "Exercise 1.3"));
console.log('\n');

// Declare the http variable and import the module
var http = require("http");

// Declare the express variable and import the module
var express = require("express");

// Declare the path variable and import the module
var path = require("path");

// Call the express function to start Express App
var app = express();

// Create address using app.get
app.get("/", function(request,response){
    response.render("index", {
      firstName:"Mickey",
      lastName:"Mouse",
      address: "1414 Disney Way, Anaheim, CA"
    });
});

// Tell express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use the EJS View Engine
app.set("view engine", "ejs");

app.get("/", function(request ,response){
    response.render("index", viewModel);
});

// create 8080 server connection
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});

// End Program

