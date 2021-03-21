const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reccommend_dish', {
    ID_DISH: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'reccommend_dish',
    timestamps: false
  });
};
