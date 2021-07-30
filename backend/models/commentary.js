'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Commentary.belongsTo(models.User, {
        foreignKey: "UserId"
      })
      models.Commentary.belongsTo(models.Post,{
        foreignKey: "PostId"
      })
    }
  };
  Commentary.init({
    content: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commentary',
  });
  return Commentary;
};