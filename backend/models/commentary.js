'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commentary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.commentary.belongsTo(models.user)
      models.commentary.belongsTo(models.post)
    }
  };
  commentary.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'commentary',
  });
  return commentary;
};