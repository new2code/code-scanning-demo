const express = require("express");
const app = express();

const site = await Bun.file("./index.html").text();

app.get("/", async (req, res) => {
  let greet = site.replace("%%_USER_NAME%%", req.query.name);
  if (!isValidUserId(req.query.name)) {
    greet = site.replace("%%_USER_NAME%%", "Guest");
  }
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
