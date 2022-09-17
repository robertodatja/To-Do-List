const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //FinalStep require date module (date.js)

const app = express();


let items = ["Buy food", "Cook food", "Eat food"]; //IV&VI

let workItems = []; //Templating

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
/*3-----------------------------Add CSS to Website-----------------------------*/
app.use(express.static("public"));

/*1-------------------------------app.get()------------------------------------*/
app.get("/", function(req, res) {
/*FinalStep: D cut the code and paste into the body of getDate function, in date.js file*/

let day = date.getDay(); //FinalStep: export from date module, bound to day variable

 res.render("list", {
  listTitle: day,
  newListItems: items //IV
 });

});

/*2-------------------------------app.post()------------------------------------*/
app.post("/", function(req, res) {
 let item = req.body.newItem;
 /*6---*/
 if (req.body.list === "Work") {
  workItems.push(item);
  res.redirect("/work");
 } else {
  let item = req.body.newItem;
  items.push(item); //IV
  res.redirect("/");
 }

});


/*4-------------------------------Templating------------------------------------*/
app.get("/work", function(req, res) {
 res.render("list", {
  listTitle: "Work List",
  newListItems: workItems
 });
});

app.post("/work", function(req, res) {
 let item = req.body.newItem;
 workItems.push(item);
 res.redirect("/work")
});

/*4-------------------------------Templating------------------------------------*/
app.get("/about", function(req, res) {
 res.render("about");
});


/*0-------------------------------localhost------------------------------------*/
app.listen(3000, function() {
 console.log("The server is runnning in port 3000");
});
