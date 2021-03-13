'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animalSchema = new Schema({
  species: {
    type: String,
    required: true,
    trim: true
  }
})

const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
