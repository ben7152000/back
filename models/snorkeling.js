'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Snorkeling extends Model {static associate (models) {}}
  Snorkeling.init({
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    imageUrl: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Snorkeling'
  })
  return Snorkeling
}
