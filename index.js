const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let languages = [];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/company", (req, res) => {
  res.render("company");
});
app.get("/company/info", (req, res) => {
  res.render("company-info");
});
app.get("/company/strategy", (req, res) => {
  res.render("company-strategy");
});
app.get("/company/photo", (req, res) => {
  res.render("company-photo");
});

app.get("/member", (req, res) => {
  res.render("member");
});

app.get("/member/01", (req, res) => {
  res.render("member-one");
});
app.get("/member/02", (req, res) => {
  res.render("member-two");
});

app.get("/member/03", (req, res) => {
  res.render("member-three");
});


app.get("/career", (req, res) => {
  res.render("career");
});
app.get("/career/01", (req, res) => {
  res.render("career-one");
});
app.get("/career/02", (req, res) => {
  res.render("career-two");
});
app.get("/recruit", (req, res) => {
  res.render("recruit");
});

app.get("/recruit/info", (req, res) => {
  res.render("recruit-info");
});

app.get("/recruit/message", (req, res) => {
  res.render("recruit-message");
});
app.get("/recruit/workstyle", (req, res) => {
  res.render("recruit-workstyle");
});
app.get("/recruit/faq", (req, res) => {
  res.render("recruit-faq");
});
app.get("/crosstalk/01", (req, res) => {
  res.render("crosstalk-one");
});
app.get("/crosstalk/02", (req, res) => {
  res.render("crosstalk-two");
});
app.get("/crosstalk/03", (req, res) => {
  res.render("crosstalk-three");
});




app.post("/", (req, res) => {
  const lang = req.body.pLanguage;
  languages.push(lang);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
