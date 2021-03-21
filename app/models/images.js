const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    ID_IMAGE: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    ID_DISH: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    SOURCE: {
      type: DataTypes.STRING(23),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'images',
    timestamps: false
  });
};
