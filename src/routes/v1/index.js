const express = require("express");
const schoolRoutes = require("./school-route");

// Creating new Express Router instance
const router = express.Router();

// Use school routes for /schools endpoint
router.use("/schools", schoolRoutes);

module.exports = router;
