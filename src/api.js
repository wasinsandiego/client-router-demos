import parseLinkHeader from 'parse-link-header'

const rootUrl = 'https://www.anapioficeandfire.com/api'
const ENDPOINT_CHARACTERS = '/characters'
const ENDPOINT_HOUSES = '/houses'
const ENDPOINT_BOOKS = '/books'

// example: `/characters?page=1&pageSize=10`
const get = ({ endpoint, query }) => {
  const qStr = query ? `?${Object.entries(query).join('&').split(',').join('=')}` : ''
  const url = `${rootUrl}${endpoint}${qStr}`
  return fetch(url)
    .then(response => {
      if (response.ok) {
        const links = parseLinkHeader(response.headers.get('Link'))
        // fetch is stupid
        return response.json()
          .then(data => {
            data = !data.length ? [data] : data
            return { data, links }
          })
      } else {
        throw new Error('Network response was nope.')
      }
    })
    .catch(error => {
      console.log(`There has been a problem with your fetch operation: ${error.message}`)
    })
}

const getCharacters = ({ params = {}, query }) => get({ endpoint: `${ENDPOINT_CHARACTERS}${params.id ? `/${params.id}` : ''}`, query })
const getHouses = ({ params = {}, query }) => get({ endpoint: `${ENDPOINT_HOUSES}${params.id ? `/${params.id}` : ''}`, query })
const getBooks = ({ params = {}, query }) => get({ endpoint: `${ENDPOINT_BOOKS}${params.id ? `/${params.id}` : ''}`, query })

export default {
  get,
  getCharacters,
  getHouses,
  getBooks
}
