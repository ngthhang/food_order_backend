const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    ID_ORDER: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    ID_TABLE: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    CREATED_AT: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    UPDATED_AT: {
      type: DataTypes.STRING(0),
      allowNull: true
    },
    STATUSS: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false
  });
};
