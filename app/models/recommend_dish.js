const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recommend_dish', {
    DISH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'dish',
        key: 'DISH_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'recommend_dish',
    timestamps: false,
    indexes: [
      {
        name: "FK_DISH_ID2",
        using: "BTREE",
        fields: [
          { name: "DISH_ID" },
        ]
      },
    ]
  });
};
