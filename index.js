// instants express module
const express = require("express");
//init body parser
const bodyParser = require("body-parser");
// init group route
require("express-group-routes");
// use express in variable
const app = express();
//handle cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
// define server port
const port = 5000;
//allow body parser
app.use(bodyParser.json());

// import controller
const LoginController = require("./controllers/login");
// -- create groups routes
// -- Endpoint
app.group("/api/v1", (routes) => {
  //strukturing folder
  routes.get("/", LoginController.index);
});


// create the homepage route
app.get("/", (req, res) => {
  res.send("hallo septe");
});

// listten port
app.listen(port, () => console.log(`run express on port ${port}`));
