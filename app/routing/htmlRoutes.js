
// DEPENDENCIES
// Including the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var express = require("express");

var app = express();

// ROUTING
// ----------------------------------------------------------------------------

module.exports = function(app) {
  // HTML GET route direction requests
  // Code will display when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.use(express.static(__dirname + "/../public"));

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
