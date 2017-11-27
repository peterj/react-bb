import express from "express";
import serverRender from "../renderers/server";

const app = express();
// anything in the public directory is a public file
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const { initialMarkup } = serverRender();
  res.render("index", { initialMarkup });
});

app.listen(3000, () => {
  console.info("Server is running");
});
