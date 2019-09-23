var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

var mongoose = require("mongoose");

var Employees = require("./models/employee")

var mongoDB = "mongodb+srv://misswendy:302Berkeley@ems-mqmxj.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
useNewUrlParser:true
});

mongoose.Promise =global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});

// application

var app = express();

app.use(logger("short"));

// model

var employee = new Employees({
    name: "Wendy",
    last: "Portillo",
    email: "dearwendy714@gmail.com",
    ID: "007"
});

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});



// server creation

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
