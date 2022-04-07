import express from 'express'
import { DiaryController } from '../controllers/diaryController.js'
import { Authentication } from '../middleware/authentication.js'
import upload from '../utils/storage.js'

export const router = express.Router()

const controller = new DiaryController()

// GET user's diary posts
router.get('/', Authentication, (req, res, next) =>
  controller.getDiaryPosts(req, res, next)
)

// Get a single diary post by its id
router.get('/:id', Authentication, (req, res, next) =>
  controller.getDiaryPost(req, res, next)
)

// POST a new diary post
router.post('/', Authentication, (req, res, next) =>
  controller.saveDiaryPost(req, res, next)
)

// DELETE a diary post
router.delete('/delete/:id', Authentication, (req, res, next) =>
  controller.deleteDiaryPost(req, res, next)
)

// GET image
router.get('/image/:id', Authentication, (req, res, next) =>
  controller.getImage(req, res, next)
)

// POST images
router.post(
  '/upload',
  Authentication,
  upload.array('images', 10),
  (req, res, next) => controller.saveImages(req, res, next)
)
