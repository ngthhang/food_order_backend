const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('staff', {
    ID_STAFF: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    NAME_STAFF: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    USERNAME: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    PASSWORDS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ID_POSITION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REGISTERED_AT: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'staff',
    timestamps: false
  });
};
