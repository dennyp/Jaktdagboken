import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'
import createError from 'http-errors'

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export class UserController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        return next(createError(400, 'You must enter an email and a password'))
      }

      if (!validateEmail(email)) {
        return next(createError(400, 'Invalid email'))
      }

      const user = await User.authenticate(email, password)

      if (!user) {
        return next(createError(401, 'Invalid login'))
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      })

      console.log(token)

      res
        .cookie('jdbjwt', token, {
          httpOnly: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        })
        .json({ message: 'Success' })
    } catch (error) {
      next(createError(error))
    }
  }

  async register(req, res, next) {
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
    } catch (error) {
      next(createError(500))
    }
  }

  async logout(req, res, next) {
    try {
      // TODO: Check if cookie exists first?
      res.clearCookie('jdbjwt').json({ message: 'Success' })
    } catch (error) {
      next(createError(500))
    }
  }
}
