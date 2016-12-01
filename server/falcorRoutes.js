import {Meme} from './mongooseConfig'
import {atom as $atom} from 'falcor-json-graph'

const routes = [
  {
    route: 'memes.fetch',
    get: async () => {
      const query = Meme.find().limit(20)
      const result = await query.exec((err, data) => {
        if (err) console.log(err)
        return data
      })

      return {
        path: ['memes', 'fetch'],
        value: $atom(result)
      }
    }
  },
  {
    route: 'memes.save',
    call: async function (path, args) {
      const newMeme = new Meme(args[0])
      await newMeme.save(err => {
        if (err) console.log(err)
      })

      return {
        path: ['memes', 'save'],
        value: true
      }
    }
  }
]

export default routes
