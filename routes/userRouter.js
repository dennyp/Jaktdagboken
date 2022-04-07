import express from 'express'
import { UserController } from '../controllers/userController.js'

export const router = express.Router()

router.post('/login', (req, res, next) =>
  UserController.loginPost(req, res, next)
)

router.post('/register', (req, res, next) =>
  UserController.registerPost(req, res, next)
)

router.get('/logout', (req, res, next) => UserController.logout(req, res, next))
