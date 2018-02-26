import actions from './character-houses.actions'

export const initialState = {
  isLoading: false,
  error: undefined,
  data: undefined
}
const characterHouses = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined
      }

    case actions.SUCCESS:
      return {
        ...state,
        data: payload
      }

    case actions.FAILURE:
      return {
        ...state,
        error: payload
      }

    case actions.FULFILL:
      return {
        ...state,
        isLoading: false
      }

    default: return state
  }
}

export default characterHouses
