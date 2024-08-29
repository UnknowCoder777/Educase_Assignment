const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

// Middleware to check if required fields are present in the request body
function checkInputRequest(req, res, next) {
    if (!req.body.name) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(
                new ErrorResponse(
                    new AppError(
                        "Name field is missing",
                        StatusCodes.BAD_REQUEST
                    ),
                    "Name field should be present in request body"
                )
            );
    }
    if (!req.body.address) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(
                new ErrorResponse(
                    new AppError(
                        "Address field is missing",
                        StatusCodes.BAD_REQUEST
                    ),
                    "Address field should be present in request body"
                )
            );
    }
    if (!req.body.latitude) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(
                new ErrorResponse(
                    new AppError(
                        "Latitude field is missing",
                        StatusCodes.BAD_REQUEST
                    ),
                    "Latitude field should be present in request body"
                )
            );
    }
    if (!req.body.longitude) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(
                new ErrorResponse(
                    new AppError(
                        "Longitute field is missing",
                        StatusCodes.BAD_REQUEST
                    ),
                    "Longitute field should be present in request body"
                )
            );
    }
    next();
}

// Middleware to check if required query parameters are present
function checkQueryParameters(req, res, next) {
    if (!req.query.latitude) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(
                new ErrorResponse(
                    new AppError(
                        "Latitude field is missing",
                        StatusCodes.BAD_REQUEST
                    ),
                    "Latitude field should be present in request query"
                )
            );
    }
    if (!req.query.longitude) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(
                new ErrorResponse(
                    new AppError(
                        "Longitude field is missing",
                        StatusCodes.BAD_REQUEST
                    ),
                    "Longitude field should be present in request query"
                )
            );
    }
    next();
}

module.exports = {
    checkInputRequest,
    checkQueryParameters,
};
