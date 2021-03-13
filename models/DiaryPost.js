/**
 * Model of a diary post.
 *
 * @author Denny Petersson
 * @version 1.0.0
 */

'use strict'

const mongoose = require('mongoose')

const diaryPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  content: {
    type: String,
    trim: true
  },
  events: {
    type: Object
  },
  imageIds: {
    type: Object
  },
  date: {
    type: Date
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const DiaryPost = mongoose.model('DiaryPost', diaryPostSchema)

module.exports = DiaryPost
