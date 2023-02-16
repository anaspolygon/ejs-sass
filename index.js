const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let languages = [];

app.get("/", (req, res) => {
  res.render("index", { languages: languages });
});

app.post("/", (req, res) => {
  const lang = req.body.pLanguage;
  languages.push(lang);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
