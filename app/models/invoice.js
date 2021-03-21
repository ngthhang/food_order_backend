const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice', {
    ID_INVOICE: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    CREATED_AT: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ID_TABLE: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ID_STAFF: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ID_PROMO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TAX: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    },
    DISCOUNT: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TOTAL_PRICE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NET_PRICE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MONEY_RECEICED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MONEY_CHANGE: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoice',
    timestamps: false
  });
};
