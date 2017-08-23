
// action type and action creator factories
const createRequestTypes = base => ({ REQUEST: `${base}_REQUEST`, SUCCESS: `${base}_SUCCESS`, FAILURE: `${base}_FAILURE` })
const action = (type, payload = {}) => ({ type, payload })

// action types for `API_CALL`, e.g. `API_CALL.REQUEST`, `API_CALL.SUCCESS`, and `API_CALL.FAILURE`
export const API_CALL = createRequestTypes('API_CALL')
export const GET_CHARACTERS = createRequestTypes('GET_CHARACTERS')
export const GET_HOUSES = createRequestTypes('GET_HOUSES')
export const GET_BOOKS = createRequestTypes('GET_BOOKS')

// action creators for the api call
export const apiCall = {
  request: ({ endpoint, params = {}, ...rest }) => action(API_CALL.REQUEST, { endpoint, params, ...rest }),
  success: ({ data, links, ...rest }) => action(API_CALL.SUCCESS, { data, links, ...rest }),
  failure: ({ error, ...rest }) => action(API_CALL.FAILURE, { error, ...rest })
}

export const getCharacters = {
  request: ({ params, ...rest }) => action(GET_CHARACTERS.REQUEST, { params, ...rest }),
  success: ({ data, links, ...rest }) => action(GET_CHARACTERS.SUCCESS, { data, links, ...rest }),
  failure: ({ error, ...rest }) => action(GET_CHARACTERS.FAILURE, { error, ...rest })
}

export const getHouses = {
  request: ({ params, ...rest }) => action(GET_HOUSES.REQUEST, { params, ...rest }),
  success: ({ data, links, ...rest }) => action(GET_HOUSES.SUCCESS, { data, links, ...rest }),
  failure: ({ error, ...rest }) => action(GET_HOUSES.FAILURE, { error, ...rest })
}

export const getBooks = {
  request: ({ params, ...rest }) => action(GET_BOOKS.REQUEST, { params, ...rest }),
  success: ({ data, links, ...rest }) => action(GET_BOOKS.SUCCESS, { data, links, ...rest }),
  failure: ({ error, ...rest }) => action(GET_BOOKS.FAILURE, { error, ...rest })
}
