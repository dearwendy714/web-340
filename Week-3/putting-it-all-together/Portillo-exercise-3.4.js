//Header

var header = require('../../header.js');
console.log(header.display("Wendy", "Portillo", "Exercise 3.4"));
console.log('\n');

/*
============================================
; Title:  Portillo-exercise-3.4
; Author: Professor Krasso
; Date:   21 August 2019
; Modified By: Wendy Portillo
; Description:  Assignment 3.4
;===========================================
*/
//Start


var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

// specifying the route to views
app.set('views', path.resolve(__dirname, 'views'));

// telling express to use the views engine
app.set('view engine', 'ejs');

// creating out logger
app.use(logger('short'));

app.get('/', function (req, res){
    res.render('index', {
        message: 'home page'
    });
});

app.get('/about', function(req, res){
    res.render('about', {
        message: 'about page'
    });
});

app.get('/contact', function(req, res){
    res.render('contact', {
        message: 'contact page'
    });
});

app.get('/products', function(req, res){
    res.render('products', {
        message: 'products page'
    });
});


http.createServer(app).listen(8080, function(){
    console.log('Application started on port 8080');
});
