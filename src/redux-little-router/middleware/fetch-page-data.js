// eslint-disable-next-line
import { getCharacters, getHouses, getBooks } from '../../app.actions'

const fetchPageData = store => next => action => {
  const { type, payload } = action
  next(action)
  if (type === 'ROUTER_LOCATION_CHANGED') {
    const { pathname , params } = payload
    switch (pathname) {
      case '/characters':
        next(
          getCharacters.request({ params: params || { page: 1, pageSize: 10 } })
        )
        break;
      case '/houses':
        next(
          getHouses.request({ params: params || { page: 1, pageSize: 10 } })
        )
        break;
      case '/books':
        next(
          getBooks.request({ params: params || { page: 1, pageSize: 10 } })
        )
        break;
    }
  }
}

export default fetchPageData
