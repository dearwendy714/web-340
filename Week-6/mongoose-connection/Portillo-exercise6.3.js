/*
============================================
; Title:  Portillo-exercise-6.3
; Author: Professor Krasso
; Date:   13 September 2019
; Modified By:Wendy Portillo
; Description:  mongoDB connection
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://misswendy:<password>@ems-mqmxj.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log('Application connected to mLab MongoDB instance');
});

var app = express ();

app.use(logger('dev'));

http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000');
});
