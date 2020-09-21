const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 1234;

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
