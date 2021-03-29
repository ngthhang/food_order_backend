const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('auth', {
        AUTH_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        STAFF_ID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        TOKEN: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'auth',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "AUTH_ID" },
                ]
            },
        ]
    });
};
