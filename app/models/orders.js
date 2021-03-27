const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    ORDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TABLE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tables',
        key: 'TABLE_ID'
      }
    },
    CREATED_AT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UPDATED_AT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ORDER_ID" },
        ]
      },
      {
        name: "FK_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "TABLE_ID" },
        ]
      },
    ]
  });
};
