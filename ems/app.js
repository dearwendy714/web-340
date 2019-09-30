var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

var mongoose = require("mongoose");

var helmet = require("helmet");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");

var Employees = require("./models/employee")

var csrfProtection =csrf({cookie:true});

var mongoDB = "mongodb+srv://dearwendy714:302Berkeley@cluster0-mqmxj.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
useNewUrlParser:true,
useUnifiedTopology: true
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

app.use(helmet.xssFilter());

app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

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
app.get("/new", function (request, response) {

  response.render("new", {

      title: "New Employees"

  });

});
app.post('/process', function(req, res) {
   console.log(req.body);
  if (!req.body.firstName) {
      res.status(400).send('Entries must have a first name.');
      return;
  } else if(!req.body.lastName) {
      res.status(404).send('Entries must have a last name.')
      return;
  } else if(!req.body.email) {
      res.status(400).send('Entries must have an email.')
      return;
  } else if(!req.body.id) {
      res.status(400).send('Entries must have an employee ID.')
      return;
  }

  // get the request's form data
  const firstName = req.body.firstName;
  console.log(firstName);
  const lastName = req.body.lastName;
  console.log(lastName)
  const email = req.body.email;
  console.log(email)
  const ID = req.body.id;
  console.log(ID)

  // create a employee model
  let employees = new Employees({
    first: firstName,
    last: lastName,
    email: email,
    ID: ID

  });

  // save
  employees.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + ' saved successfully!');
      res.redirect('/');
    }
  });
});




// server creation

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
