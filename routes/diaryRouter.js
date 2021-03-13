/**
 * Router for diary.
 *
 * @author Denny Petersson
 * @version 1.0.0
 */

'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/diaryController')
const authentication = require('../middleware/authentication')
const multer = require('multer')
const storage = require('../utils/storage')
const upload = multer({ storage })

// GET user's diary posts
router.get('/', authentication, controller.getDiaryPosts)

// Get a single diary post by its id
router.get('/:id', authentication, controller.getDiaryPost)

// POST a new diary post
router.post('/', authentication, controller.saveDiaryPost)

// DELETE a diary post
router.delete('/delete/:id', authentication, controller.deleteDiaryPost)

// GET image
router.get('/image/:id', authentication, controller.getImage)

// POST images
router.post(
  '/upload',
  authentication,
  upload.array('images', 10),
  controller.saveImages
)

module.exports = router
