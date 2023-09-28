const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3000;

var home = "i go to office , i play golf and i eat , code sleep and repeat ";
var about = "this is about page";
var contact = "this is contact page";

app.get("/", (req, res) => {
  res.render("index", { content: home });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: about });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contact });
});

app.get("/compose", (req, res) => {
  res.render("compose", );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
