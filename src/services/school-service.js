const { StatusCodes } = require("http-status-codes");
const { SchoolRepository } = require("../repository");
const AppError = require("../utils/error/app-error");
const { CalculateDistance } = require("../utils/common");

// Creating new School Repository Instance
const schoolRepository = new SchoolRepository();

// Function to create new School entry
async function createSchool(data) {
    try {
        const school = await schoolRepository.create(data);
        return school;
    } catch (error) {
        console.log(error);

        if (error.name === "SequelizeUniqueConstraintError") {
            throw new AppError(
                error.errors[0].message,
                StatusCodes.BAD_REQUEST
            );
        }

        throw new AppError(
            "Something went wrong while creating new school",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

// Function to fetch all schools, sorted by proximity to given coordinates
async function fetchAllSchools(data) {
    try {
        const schools = await schoolRepository.findAll();

        // Calcuate distance and sort schools based on proximity
        const sortedSchools = schools
            .map((school) => ({
                ...school.dataValues,
                distance: CalculateDistance.calculate(
                    parseFloat(data.latitude),
                    parseFloat(data.longitude),
                    school.latitude,
                    school.longitude
                ),
            }))
            .sort((a, b) => a.distance - b.distance);

        return sortedSchools;
    } catch (error) {
        throw new AppError(
            "Something went wrong while fetching all schools",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createSchool,
    fetchAllSchools,
};
