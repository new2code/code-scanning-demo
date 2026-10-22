const path = require("path");
const fs = require("fs/promises");


app.get("/download", async (req, res) => {
  try {
    const filePath = path.join(
      __dirname,
      "public",
      req.query.file
    );

    const contents = await fs.readFile(filePath, "utf8");
    res.type("text/plain").send(contents);
  } catch (err) {
    res.status(404).send("File not found");
  }
});
