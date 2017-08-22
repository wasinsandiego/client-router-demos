import parseLinkHeader from 'parse-link-header'

const rootUrl = 'https://www.anapioficeandfire.com/api'
const ENDPOINT_CHARACTERS = '/characters'
const ENDPOINT_HOUSES = '/houses'
const ENDPOINT_BOOKS = '/books'

// example: `/characters?page=1&pageSize=10`
const get = ({ endpoint, params }) => {
  const url = `${rootUrl}${endpoint}?${Object.entries(params).join('&').split(',').join('=')}`
  return fetch(url)
    .then(response => {
      if (response.ok) {
        const links = parseLinkHeader(response.headers.get('Link'))
        // fetch is stupid
        return response.json().then(data => ({ data, links }))
      } else {
        throw new Error('Network response was nope.')
      }
    })
    .catch(error => {
      console.log(`There has been a problem with your fetch operation: ${error.message}`)
    })
}

const getCharacters = ({ params }) => get({ endpoint: ENDPOINT_CHARACTERS, params })
const getHouses = ({ params }) => get({ endpoint: ENDPOINT_HOUSES, params })
const getBooks = ({ params }) => get({ endpoint: ENDPOINT_BOOKS, params })

export default {
  get,
  getCharacters,
  getHouses,
  getBooks
}
