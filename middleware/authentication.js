/**
 * Authentication middleware to check for jwt.
 *
 * @author Denny Petersson
 * @version 1.0.0
 */

'use strict'

const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.jdbjwt

    if (!token) {
      return res.status(403).json({ message: 'You need to login' })
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET)

    if (decoded) {
      const user = await User.findById(decoded.id)

      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }

      req.user = user
      next()
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = authentication
