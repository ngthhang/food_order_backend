const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dish', {
    DISH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TYPE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_of_dish',
        key: 'TYPE_ID'
      }
    },
    DESCRIPTION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    RATION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "KHẨU PHẦN ĂN BAO NHIEU"
    },
    STATUS: {
      type: "BIT(2)",
      allowNull: false
    },
    PRICE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DISCOUNT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TIME_SLOT: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dish',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DISH_ID" },
        ]
      },
      {
        name: "FK_TYPE_OF_DISH",
        using: "BTREE",
        fields: [
          { name: "TYPE_ID" },
        ]
      },
    ]
  });
};
