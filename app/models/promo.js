const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promo', {
    PROMO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PERCENT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MINIMUM_PRICE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRE_CONDITION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EXPIRED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AVAIABLE: {
      type: "BIT(2)",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PROMO_ID" },
        ]
      },
    ]
  });
};
