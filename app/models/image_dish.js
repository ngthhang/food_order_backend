const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('image_dish', {
    IMG_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DISH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dish',
        key: 'DISH_ID'
      }
    },
    SRC: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'image_dish',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IMG_ID" },
        ]
      },
      {
        name: "FK_DISH_ID3",
        using: "BTREE",
        fields: [
          { name: "DISH_ID" },
        ]
      },
    ]
  });
};
