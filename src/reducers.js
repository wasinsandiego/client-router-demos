import { combineReducers } from 'redux'
import {
  API_CALL,
  GET_CHARACTERS,
  GET_HOUSES,
  GET_BOOKS
} from './app.actions'

export const geod = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod
    case 'CLOSE_GEOD':
      return {}
    default:
      return state
  }
}

export const nav = (state = [], action) => (state)

export const characters = (state = [], action) => {
  const { type, payload } = action
  if (type === GET_CHARACTERS.SUCCESS) {
    const { data, links } = payload
    return { data, links }
  }
  return state
}

export const houses = (state = [], action) => {
  const { type, payload } = action
  if (type === GET_HOUSES.SUCCESS) {
    const { data, links } = payload
    return { data, links }
  }
  return state
}

export const books = (state = [], action) => {
  const { type, payload } = action
  if (type === GET_BOOKS.SUCCESS) {
    const { data, links } = payload
    return { data, links }
  }
  return state
}

export default combineReducers({
  nav,
  characters,
  houses,
  books
})
