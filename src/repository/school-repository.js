const { School } = require("../models");
const CrudRepository = require("./crud-repository");

// School repository extending generic CRUD repository
class SchoolRepository extends CrudRepository {
    constructor() {
        super(School);
    }
}

module.exports = SchoolRepository;
