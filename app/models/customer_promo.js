const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_promo', {
    ID_CUSTOMER: {
      type: DataTypes.TINYINT,
      allowNull: true,
      primaryKey: true
    },
    ID_PROMO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    USED: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_promo',
    timestamps: false
  });
};
