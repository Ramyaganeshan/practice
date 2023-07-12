const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
app.get("/ http://localhost:5500", function (req, res) {
  res.send("<h1>Welcome" + req.query["username"] + "</h1>");
});
app.listen(5500);
