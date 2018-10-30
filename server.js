// Dependencies
// npm packages that will that we will use to give our server useful functionality
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');


// Setting up express app

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// ---------------------------------------------------------------
//Router
//Serves to route files when visitors on URL ask for response


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//-------------------------------------------------------------
// Listener starts our server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

