"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class School extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    School.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            latitude: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: true,
                    min: -90,
                    max: 90,
                },
            },
            longitude: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: true,
                    min: -180,
                    max: 180,
                },
            },
        },
        {
            sequelize,
            modelName: "School",
        }
    );
    return School;
};
