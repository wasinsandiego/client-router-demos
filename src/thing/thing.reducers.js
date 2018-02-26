import { THING_CLICKED } from './thing.actions'

const thingClickCount = (state = 0, action) => {
  const { type, payload } = action
  if (type === THING_CLICKED) {
    const { count } = payload
    return count
  }
  return state
}

export default thingClickCount
