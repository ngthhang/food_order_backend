const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
    ID_CUSTOMER: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    NAMES: {
      type: DataTypes.STRING(23),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    VISITED_AT: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer',
    timestamps: false
  });
};
