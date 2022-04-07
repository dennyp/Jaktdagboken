import { Animal } from '../models/Animal.js'
const animalsController = {}

export class AnimalsController {
  /**
   * index GET
   */
  async index(req, res, next) {
    try {
      const animals = await Animal.find({})
      return res.status(200).json(animals)
    } catch (err) {
      return res.status(500)
    }
  }

  async create(req, res, next) {
    try {
    } catch (err) {
      return res.status(500)
    }
  }
}
