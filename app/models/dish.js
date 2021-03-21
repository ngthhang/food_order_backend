const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dish', {
    ID_DISH: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    NAMES: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ID_TYPE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCRIPTIONS: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    RATION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    STATUSS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRICE: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    DISCOUNT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIME_SLOT: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dish',
    timestamps: false
  });
};
