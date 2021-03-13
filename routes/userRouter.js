/**
 * Router for user.
 *
 * @author Denny Petersson
 * @version 1.0.0
 */

'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

// POST login
router.post('/login', controller.loginPost)

// POST register
router.post('/register', controller.registerPost)

// GET logout
router.get('/logout', controller.logout)

module.exports = router
