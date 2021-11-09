const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
require("dotenv").config();
const db = require("./db");

app.use(express.json());
app.use(express.static(__dirname + "/../dist"));
app.use("/", router);

app.listen(port, () => {
  console.log(`app listening at Port ${port}`);
});
