const { StatusCodes } = require("http-status-codes");
const { SchoolService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

// Controller to handle the creation of a new school
async function createSchool(req, res) {
    try {
        const school = await SchoolService.createSchool({
            name: req.body.name,
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });

        return res
            .status(StatusCodes.CREATED)
            .json(new SuccessResponse(school, "Successfully created school"));
    } catch (error) {
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(new ErrorResponse(error));
    }
}

// Controller to handle fetching all schools sorted by proximity
async function fetchAllSchools(req, res) {
    try {
        const schools = await SchoolService.fetchAllSchools({
            latitude: req.query.latitude,
            longitude: req.query.longitude,
        });

        return res
            .status(StatusCodes.OK)
            .json(
                new SuccessResponse(schools, "Successfully fetched all schools")
            );
    } catch (error) {
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(new ErrorResponse(error));
    }
}

module.exports = {
    createSchool,
    fetchAllSchools,
};
