'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.like.belongsTo(models.user)
      models.like.belongsTo(models.post)
      
    }
  };
  like.init({
    like: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'like',
  });
  return like;
};