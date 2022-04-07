import express from 'express'
import { AnimalsController } from '../controllers/animalsController.js'

export const router = express.Router()

const controller = new AnimalsController()

router.get('/', (req, res, next) => controller.index(req, res, next))
router.post('/', (req, res, next) => controller.create(req, res, next))
router.put('/', (req, res, next) => controller.update(req, res, next))
router.delete('/', (req, res, next) => controller.delete(req, res, next))
