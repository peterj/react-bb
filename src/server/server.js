const express = require("express");

const app = express();
// anything in the public directory is a public file
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(3000, () => {
  console.info("Server is running");
});
