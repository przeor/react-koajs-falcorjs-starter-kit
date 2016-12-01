import mongoose from 'mongoose'

// Basic configuration
const conf = {
  hostname: process.env.MONGO_HOSTNAME || 'localhost',
  port: process.env.MONGO_PORT || 27017,
  env: process.env.MONGO_ENV || 'memy'
}

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`)

// Models
const memeSchema = {
  title: { type: String, required: true, default: 'default title' },
  subTitle: { type: String, required: true, default: 'default subtitle' },
  image: { type: String, required: true, default: 'http://placehold.it/350?text=No+image+selected' }
}
export const Meme = mongoose.model('Meme', memeSchema, 'memes')
