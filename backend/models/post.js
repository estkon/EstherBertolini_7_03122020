'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.post.belongsTo(models.user)// le modèle post peut avoir plusieur user
      models.post.hasMany(models.like) // le modèle post peut avoir plusieur like
      models.post.hasMany(models.commentary) // le modèle post peut avoir plusieur like
    }
  };
  post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};