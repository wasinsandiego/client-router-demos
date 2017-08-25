// eslint-disable-next-line
import { getCharacters, getHouses, getBooks } from '../../app.actions'
import { get } from 'lodash'

const pageParams = { page: 1, pageSize: 50 }
const fetchPageData = store => next => action => {
  const { type } = action
  // pass along the original action so all the things can happen
  next(action)

  const current = get(action, 'meta.location.current', {})
  const { payload, query } = current

  switch (type) {
    case 'CHARACTERS':
      next(  getCharacters.request({ params: payload, query })  )
      break
    case 'HOUSES':
      next(  getHouses.request({ params: payload, query })  )
      break
    case 'BOOKS':
      next(  getBooks.request({ params: payload, query })  )
      break
    case 'CHARACTER_DETAIL':
      next(  getCharacters.request({ params: payload })  )
      break
    case 'HOUSE_DETAIL':
      next(  getHouses.request({ params: payload })  )
      break
    case 'BOOK_DETAIL':
      next(  getBooks.request({ params: payload })  )
      break
    default:
      void 0

  }
}

export default fetchPageData
