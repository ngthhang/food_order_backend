const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_promo', {
    CUSTOMER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'CUSTOMER_ID'
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
    USED: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer_promo',
    timestamps: false,
    indexes: [
      {
        name: "FK_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "CUSTOMER_ID" },
        ]
      },
      {
        name: "FK_POSITION_ID1",
        using: "BTREE",
        fields: [
          { name: "PROMO_ID" },
        ]
      },
    ]
  });
};
