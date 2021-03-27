const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staff', {
    STAFF_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME_STAFF: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PHONE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    USERNAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    POSITION_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'position',
        key: 'POSITION_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'staff',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STAFF_ID" },
        ]
      },
      {
        name: "FK_POSITION_ID",
        using: "BTREE",
        fields: [
          { name: "POSITION_ID" },
        ]
      },
    ]
  });
};
