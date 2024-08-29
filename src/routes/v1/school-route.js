const express = require("express");
const { SchoolController } = require("../../controllers");
const { InputMiddleware } = require("../../middlewares");

// Creating new Express Router instance
const router = express.Router();

// Route to add new school
router.post(
    "/addSchool",
    InputMiddleware.checkInputRequest,
    SchoolController.createSchool
);

// Route to list all schools sorted by proximity
router.get(
    "/listSchools",
    InputMiddleware.checkQueryParameters,
    SchoolController.fetchAllSchools
);

module.exports = router;
