// Generic CRUD repository for Sequelize models
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async findAll() {
        const response = await this.model.findAll();
        return response;
    }
}

module.exports = CrudRepository;
