const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice_detail', {
    INVOICE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invoice',
        key: 'INVOICE_ID'
      }
    },
    ORDER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'ORDER_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'invoice_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "INVOICE_ID" },
          { name: "ORDER_ID" },
        ]
      },
      {
        name: "FK_ORDER_ID5",
        using: "BTREE",
        fields: [
          { name: "ORDER_ID" },
        ]
      },
    ]
  });
};
