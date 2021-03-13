'use strict'

const Animal = require('../models/Animal')
const getAnimalsController = {}

/**
 * index GET
 */
getAnimalsController.index = async (req, res, next) => {
  try {
    const animals = await Animal.find({})
    return res.status(200).json(animals)
  } catch (err) {
    return res.status(500)
  }
}

module.exports = getAnimalsController
