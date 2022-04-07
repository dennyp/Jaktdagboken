import mongoose from 'mongoose'
const Schema = mongoose.Schema

const animalSchema = new Schema({
  species: {
    type: String,
    required: true,
    trim: true,
  },
})

export const Animal = mongoose.model('Animal', animalSchema)
