// instants express module
const express = require("express");
// use express in variable
const app = express();
// define server port
const port = 5000;

// create the homepage route
app.get("/", (req, res) => {
  res.send("hallo septe");
});

// listten port
app.listen(port, () => console.log(`run express on port ${port}`));
