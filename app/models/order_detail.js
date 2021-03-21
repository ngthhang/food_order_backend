const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
    ID_ORDER: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    ID_DISH: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    QUANTITY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NOTE: {
      type: DataTypes.STRING(0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_detail',
    timestamps: false
  });
};
