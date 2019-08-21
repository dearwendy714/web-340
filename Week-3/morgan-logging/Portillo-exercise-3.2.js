//Header

var header = require('../../header.js');
console.log(header.display("Wendy", "Portillo", "Exercise 1.4"));
console.log('\n');

/*
============================================
; Title:  Portillo-exercise-1.4
; Author: Professor Krasso
; Date:   21 August 2019
; Modified By: Wendy Portillo
; Description:  Assignment 3.2
;===========================================
*/
//Start

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        message: "Hello Gorgeous!"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});


