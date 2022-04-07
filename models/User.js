import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const SALT_ROUNDS = 12

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      trim: true,
      validate: [validator.isEmail, 'Invalid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 8,
      trim: true,
    },
  },
  { timestamps: true }
)

// Pre-hook that runs before saving the model to the db
userSchema.pre('save', async function(next) {
  let user = this

  if (user.isModified('password') || user.isNew) {
    let hashPwd = await bcrypt.hash(user.password, SALT_ROUNDS)
    user.password = hashPwd
  }
  next()
})

// Finds user in db and check if correct password is entered
userSchema.statics.authenticate = async function(email, password) {
  const user = await this.findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Wrong username or password.')
  }

  return user
}

export const User = mongoose.model('User', userSchema)
