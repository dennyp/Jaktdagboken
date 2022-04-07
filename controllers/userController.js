import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

const userController = {}

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export class UserController {
  async loginPost(req, res, next) {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: 'You must enter an email and a password.' })
      }

      if (!validateEmail(email)) {
        return res
          .status(400)
          .json({ message: 'The email address is incorrectly formatted.' })
      }

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(403).json({ message: 'Invalid login' })
      }

      const valid = await user.comparePassword(password)

      if (!valid) {
        return res.status(403).json({ message: 'Invalid login' })
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      })

      res
        .cookie('jdbjwt', token, {
          httpOnly: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        })
        .json({ message: 'Success' })
    } catch (error) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async logout(req, res, next) {
    try {
      // TODO: Check if cookie exists first?
      res.clearCookie('jdbjwt').json({ message: 'Success' })
    } catch {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async registerPost(req, res, next) {
    try {
      const { email, password, name } = req.body

      if (!email) {
        return res.status(400).json({ message: 'EmailError' })
      }

      if (!validateEmail(email)) {
        return res
          .status(400)
          .json({ message: 'The email address is incorrectly formatted.' })
      }

      if (!password) {
        return res.status(400).json({ message: 'PasswordError' })
      }

      if (!name) {
        return res.status(400).json({ message: 'NameError' })
      }

      const user = await User.findOne({ email })

      if (user) {
        return res.status(422).json({ message: 'User exists' })
      }

      await new User({ email, password, name }).save()

      res.status(200).json({ message: 'Success' })
    } catch {
      res.status(500).json({ message: 'Server error' })
    }
  }
}
