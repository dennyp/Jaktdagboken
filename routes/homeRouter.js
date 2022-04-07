import express from 'express'
import { HomeController } from '../controllers/homeController.js'
import { router as animalsRouter } from './animalsRouter.js'
import { router as userRouter } from './userRouter.js'
import { router as diaryRouter } from './diaryRouter.js'

export const router = express.Router()

const controller = new HomeController()

router.use('/', userRouter)
router.use('/animals', animalsRouter)
router.use('/user', userRouter)
router.use('/diary', diaryRouter)
