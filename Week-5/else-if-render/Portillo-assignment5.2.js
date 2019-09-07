/*
============================================
; Title:  Portillo-exercise-5.2.js
; Author: Professor Krasso
; Date:   4 September 2019
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');

app = express();

// specifying the route to our views directory
app.set('views', path.resolve(__dirname, 'views'));

// telling express that we want to use the ejs view engine
app.set('view engine', 'ejs');

// Disney characters array
var disney = [
    'Mickey',
    'Minnie',
    'Donald',
    'Daisy',
    'Pluto',
    'Goofy'
];

// outputting to index.ejs
app.get('/', function(req, res){
    res.render('index', {
        disney: disney
    })
});


//creating our server on port 8080
http.createServer(app).listen(8080, function(){
    console.log('Application started on port 8080');
});
