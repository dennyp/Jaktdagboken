/**
 * Model of a User.
 *
 * @author Denny Petersson
 * @version 1.0.0
 */

'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

userSchema.path('password').validate(password => {
  return password.length >= 8
}, 'The password must be of minimum length 6 characters.')

// Pre-hook that runs before saving the model to the db
userSchema.pre('save', async function (next) {
  let user = this
  const saltRounds = 12

  if (user.isModified('password') || user.isNew) {
    let hashPwd = await bcrypt.hash(user.password, saltRounds)
    user.password = hashPwd
  }
  next()
})

// Method that compares the entered password with the one stored in the db
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
