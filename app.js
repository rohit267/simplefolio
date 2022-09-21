const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

app.use(express.static("dist", { maxAge: 604800000 }));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "dist", "index.html")));
app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`));
