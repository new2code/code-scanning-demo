const express = require("express");
const app = express();

const site = Bun.file("./index.html").textSync();

app.get("/", (req, res) => {
  const name = req.query.name || "Гость";
  const greet = site.replace("%%_USER_NAME%%", name);
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
