const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tables', {
    ID_TABLE: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    FLOOR_NUMBER: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PEOPLE_NUMBER: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    STATUSS: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tables',
    timestamps: false
  });
};
