const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.route");
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://huntermsd:lavachkin140@clusterme.gu4lt.gcp.mongodb.net/ClusterMe?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connecction;
db.on("error", console.log.error.bind(console, "MongoDB connection error:"));

app.use("./products", product);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let port = 1234;

app.listen(port, () => {
  console.log("Server is running on port", port);
});
