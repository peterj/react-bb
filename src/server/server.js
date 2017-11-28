import express from "express";
import serverRender from "../renderers/server";

const app = express();
// anything in the public directory is a public file
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const { initialMarkup, initialData } = await serverRender();
  res.render("index", { initialMarkup, initialData });
});

app.listen(3000, () => {
  console.info("Server is running");
});
