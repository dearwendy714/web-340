/*
============================================
; Title:  Portillo-exercise-1.3
; Author: Professor Krasso
; Date:   11 August 2019
; Modified By: Wendy Portillo
; Description:  Assignment 1.3
;===========================================
*/

//Header

var header = require('../header.js');
console.log(header.display("Wendy", "Portillo", "Exercise 1.3"));
console.log('\n');



var url = require('url');

// assigning the url to the parsedURL variable
var parsedURL = url.parse('https://www.example.com/profile?name-Portillo');

//console.log the "https" portion of the URL
console.log(parsedURL.protocol);

// console.log the "www.example" portion of the URL
console.log(parsedURL.host);

// console.log the "name-townsend" portion of the URL
console.log(parsedURL.query);
