const express = require('express');
const app = express();
const port = 1234;
const path = require("path");

app.use(express.static('dist', { maxAge: 604800000 }));

app.get('/', (req, res) => res.sendFile(path.resolve([__dirname, "dist", "index.html"])));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))