// eslint-disable-next-line
import { getCharacters, getHouses, getBooks } from '../../app.actions'

const pageParams = { page: 1, pageSize: 10 }
const fetchPageData = store => next => action => {
  const { type, payload } = action
  // pass along the original action so all the things can happen
  next(action)

  // if its a router change, take a look and dispatch actions for sagas to fetch
  // the page data
  // NOTE: We can set this up to be generic and use `url-pattern` to
  // match the pathname which would maps to an action creator. Kind of like
  // matching a route to a controller function.
  if (type === 'ROUTER_LOCATION_CHANGED') {
    const { pathname , params, query = pageParams } = payload

    if (pathname.indexOf('/characters') === 0) {
      next(  getCharacters.request({ params, query })  )
    }

    if (pathname.indexOf('/houses') === 0) {
      next(  getHouses.request({ params, query })  )
    }

    if (pathname.indexOf('/books') === 0) {
      next(  getBooks.request({ params, query })  )
    }
  }
}

export default fetchPageData
