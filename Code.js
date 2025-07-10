require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});
app.listen(process.env.PORT);
