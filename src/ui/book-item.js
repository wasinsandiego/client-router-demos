import React from 'react'
import PropTypes from 'prop-types'
import './list-item.css'

const BookItem = ({ url, name, authors = [], isbn }) => (
  <li className='book-item'>
    <div className='book-item-title'><a href={url}>{name}</a></div>
    <div className='book-item-description'>by {authors.join(', ')}</div>
    <div className='book-item-isbn'><a href={`https://www.amazon.com/s?field-keywords=${isbn}`} target='_blank'>{isbn}</a></div>
  </li>
)

BookItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  authors: PropTypes.array,
  isbn: PropTypes.string
}

export default BookItem

