'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Post.belongsTo(models.User, {
        foreignKey: "UserId"
      })// le modèle Post peut avoir plusieur user
      models.Post.hasMany(models.Like,{ onDelete: 'cascade' }) // le modèle Post peut avoir plusieur like
      models.Post.hasMany(models.Commentary, { onDelete: 'cascade' }) // le modèle Post peut avoir plusieur like
    }
  };
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};