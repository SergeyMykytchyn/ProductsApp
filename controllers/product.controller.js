const Product = require("../models/product.model");

// Simple version without validation or sanitation
exports.test = function (req, res) {
  res.send("Greeting from the test controller!");
};
