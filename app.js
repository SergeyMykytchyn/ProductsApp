const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 1234;
const product = require("./routes/product.route");

app.use("./products", product);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
