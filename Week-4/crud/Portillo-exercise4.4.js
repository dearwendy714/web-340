/*
============================================
; Title:  Portillo-exercise-4.4.js
; Author: Professor Krasso
; Date:   1 September 2019
; Description: Demonstrates CRUD Operations in a
;              Node.js API.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
