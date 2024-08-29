// Standardized Success Response Structure
class SuccessResponse {
    constructor(data, message = "Successfully completed the request") {
        this.success = true;
        this.message = message;
        this.data = data;
        this.error = null;
    }
}

module.exports = SuccessResponse;
