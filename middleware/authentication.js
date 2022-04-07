import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

const verifyTokenAndReturnUser = async (req) => {
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
  }

  return user
}
export class Authentication {
  async authentication(req, res, next) {
    try {
      const user = await verifyTokenAndReturnUser(req)
      req.user = user

      next()
    } catch (error) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async isAuthenticated(req, res, next) {
    try {
      res.status(200).json({ message: 'Authenticated' })
    } catch (error) {
      res.status(500).json({ message: 'Server error' })
    }
  }
}
