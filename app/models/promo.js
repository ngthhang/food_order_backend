const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo', {
    ID_PROMO: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    NAMES: {
      type: DataTypes.STRING(38),
      allowNull: true
    },
    PERCENTS: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    MIN_PRICE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRE_CONDITION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EXPIRED: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    AVAIABLE: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promo',
    timestamps: false
  });
};
