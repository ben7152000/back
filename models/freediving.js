'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Freediving extends Model {static associate (models) {}}
  Freediving.init({
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Freediving'
  })
  return Freediving
}
