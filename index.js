const express = require("express");
const app = express();

const site = await Bun.file("./index.html").text();

app.get('/user/:id', function(req, res) {
  if (!isValidUserId(req.params.id))
    // GOOD: request parameter is sanitized before incorporating it into the response
    res.send("Unknown user: " + escape(req.params.id));
  else
    // TODO: do something exciting
    ;
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
