const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

mongoose.connect("mongodb://127.0.0.1/nodeblog_db");

app.use(fileUpload());

app.use(express.static("public"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const main = require("./routes/main");
app.use("/", main);

app.listen(port, hostname, () =>
  console.log(`Server calisiyor, http://${hostname}:${port}/`)
);
