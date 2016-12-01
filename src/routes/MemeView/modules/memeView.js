import {Map} from 'immutable'
import model from '../../../falcorModel.js'

// Actions
export const ADD_MEME = 'ADD_MEME'
export const addMeme = meme => ({
  type: ADD_MEME,
  meme
})

export const RECEIVE_MEMES = 'RECEIVE_MEMES'
export const receiveMemes = memes => ({
  type: RECEIVE_MEMES,
  memes
})

// Thunks
export const fetchMemes = () => {
  return function (dispatch) {
    return model.getValue(['memes', 'fetch']).then(memes => dispatch(receiveMemes(memes)))
  }
}

export const saveMeme = meme => {
  return function (dispatch) {
    console.log(meme)
    return model.call(['memes', 'save'], [meme]).then(response => response).catch(err => console.log(err))
  }
}

// Reducer
const initialState = Map()
export default function memeReducer (state = initialState, {type, meme, memes}) {
  switch (type) {
    case ADD_MEME:
      return state.set(meme._id, meme)
    case RECEIVE_MEMES:
      return Map(memes.map(meme => [meme._id, meme]))
    default:
      return state
  }
}
