import {
  GET_CHARACTERS,
  GET_HOUSES,
  GET_BOOKS
} from './app.actions'

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
