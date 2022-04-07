import mongoose from 'mongoose'

const diaryPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  content: {
    type: String,
    trim: true,
  },
  events: {
    type: Object,
  },
  imageIds: {
    type: Object,
  },
  date: {
    type: Date,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

export const DiaryPost = mongoose.model('DiaryPost', diaryPostSchema)
