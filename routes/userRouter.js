import express from 'express'
import { UserController } from '../controllers/userController.js'

export const router = express.Router()

const controller = new UserController()

router.post('/login', (req, res, next) => controller.login(req, res, next))

router.post('/register', (req, res, next) =>
  controller.register(req, res, next)
)

router.get('/logout', (req, res, next) => controller.logout(req, res, next))
