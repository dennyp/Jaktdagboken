import { Animal } from '../models/Animal.js'
import createError from 'http-errors'

export class AnimalsController {
  /**
   * index GET
   */
  async index(req, res, next) {
    try {
      const animals = await Animal.find({})
      return res.status(200).json(animals)
    } catch (err) {
      next(createError(500))
    }
  }

  async create(req, res, next) {
    try {
      next(createError(501))
    } catch (err) {
      next()
    }
  }

  async update(req, res, next) {
    try {
      next(createError(501))
    } catch (err) {
      next()
    }
  }

  async delete(req, res, next) {
    try {
      next(createError(501))
    } catch (err) {
      next()
    }
  }
}
