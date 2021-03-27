const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoice', {
    INVOICE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CREATED_AT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TABLE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tables',
        key: 'TABLE_ID'
      }
    },
    PROMO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'promo',
        key: 'PROMO_ID'
      }
    },
    TAX: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TOTAL_PRICE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NET_PRICE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MONEY_RECEIVED: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MONEY_CHANGE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    STAFF_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'staff',
        key: 'STAFF_ID'
      }
    },
    CUSTOMER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "INVOICE_ID" },
        ]
      },
      {
        name: "FK_TABLE_ID2",
        using: "BTREE",
        fields: [
          { name: "TABLE_ID" },
        ]
      },
      {
        name: "FK_PROMO_ID2",
        using: "BTREE",
        fields: [
          { name: "PROMO_ID" },
        ]
      },
      {
        name: "FK_STAFF_ID3",
        using: "BTREE",
        fields: [
          { name: "STAFF_ID" },
        ]
      },
    ]
  });
};
