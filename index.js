import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const cards = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {cards});
});

app.get("/create-post", (req, res) => {
  res.render("form.ejs");
});

app.get("/fit1", (req, res) => {
  res.render("fit1.ejs");
});

app.get("/fit2", (req, res) => {
  res.render("fit2.ejs");
});

app.get("/fit3", (req, res) => {
  res.render("fit3.ejs");
});

app.get("/fit4", (req, res) => {
  res.render("fit4.ejs");
});

app.post("/submit", (req, res) => {
  const heading = req.body["heading"];
  const textarea = req.body["textarea"];
  cards.push({heading, textarea});
  res.render("index.ejs", {cards});
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
