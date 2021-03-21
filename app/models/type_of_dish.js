const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_of_dish', {
    ID_TYPE: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    NAMES: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'type_of_dish',
    timestamps: false
  });
};
