const express = require("express");
const app = express();

const site = await Bun.file("./index.html").text();

app.get("/", async (req, res) => {
  const name = String(req.query.name ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  let greet = site.replace("%%_USER_NAME%%", name);
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
