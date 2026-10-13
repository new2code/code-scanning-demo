const express = require("express");
const escape_html=require("escape-html");
const app = express();

const site = await Bun.file("./index.html").text();

app.get("/", async (req, res) => {
  let greet = site.replace("%%_USER_NAME%%", escape_html(req.query.name));
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
