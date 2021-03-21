const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('position', {
    ID_POSITION: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    TITLE: {
      type: DataTypes.STRING(17),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'position',
    timestamps: false
  });
};
