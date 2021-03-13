'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/getAnimalsController')

router.get('/', controller.index)

module.exports = router
