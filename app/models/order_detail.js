const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
    ORDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'ORDER_ID'
      }
    },
    DISH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dish',
        key: 'DISH_ID'
      }
    },
    QUANTITY: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NOTE: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ORDER_ID" },
          { name: "DISH_ID" },
        ]
      },
      {
        name: "FK_DISH_ID4",
        using: "BTREE",
        fields: [
          { name: "DISH_ID" },
        ]
      },
    ]
  });
};
