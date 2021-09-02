const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HelpPost = new Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  pekerjaan: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  provinsi: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  kebutuhan: {
    type: Number,
    required: true
  },
  terkumpul: {
    type: Number,
    required: true
  },
  norek: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  sosmed: {
    type: Object,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
}, {
  timestamps: true

})

module.exports = mongoose.model('HelpPost', HelpPost)