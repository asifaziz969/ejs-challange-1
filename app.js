const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const ejs = require ("ejs");
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));


const port = 3000

app.get('/', (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})