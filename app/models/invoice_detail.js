const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice_detail', {
    ID_ORDER: {
      type: DataTypes.STRING(0),
      allowNull: true,
      primaryKey: true
    },
    ID_INVOICE: {
      type: DataTypes.STRING(0),
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'invoice_detail',
    timestamps: false
  });
};
