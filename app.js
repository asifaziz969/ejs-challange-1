const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = 3000;

var cont = "i go to office , i play golf and i eat , code sleep and repeat ";

app.get("/", (req, res) => {
  res.render("index", { content: cont });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
