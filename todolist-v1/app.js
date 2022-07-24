const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const date = require(__dirname + "/date.js");


let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let day = date.getDate();

  res.render("list", { listTitle:day, newListItems: items })
});

app.post("/", (req, res) => {
  console.log(req.body);

  if (req.body.list === "Work") {
    workItems.push(req.body.newItem);
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }
})


app.get("/work", (req, res) => {
  res.render("list", {listTitle: "Work List", newListItems: workItems })
})

app.get("/about", (req, res) => {
  res.render("about");
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})
