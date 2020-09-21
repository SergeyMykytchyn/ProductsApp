const express = require("express");
const router = express.Router();

// Reqire the controllers WHICH ARE DID NOT CREATE YET!!
const product_controller = require("../controllers/product.controller");

// a simple test url to check that all of our files are commuicating correctly
router.get("./test", product_controller.product_create);
