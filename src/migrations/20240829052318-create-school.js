"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Schools", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            latitude: {
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: true,
                    min: -90,
                    max: 90,
                },
            },
            longitude: {
                type: Sequelize.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: true,
                    min: -180,
                    max: 180,
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });

        await queryInterface.addConstraint("Schools", {
            fields: ["name", "address"],
            type: "unique",
            name: "custom_unique_school_contraint_name",
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Schools");
    },
};
