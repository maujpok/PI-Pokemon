const { DataTypes } = require('sequelize');

module.exports = (sequealize) => {
    sequealize.define('type', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: true
    })
};