const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tables', {
    TABLE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FLOOR: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NUM_PEOPLE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    STATUS: {
      type: "BIT(2)",
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tables',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TABLE_ID" },
        ]
      },
    ]
  });
};
