import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'redux-little-router'
import '../ui/main-nav.css'
import '../ui/nav-item.css'

const Paginate = ({ onClick, currentPage = 1 }) => (
  <div className='paginate'>
    <Link className='paginate-prev' href={{
      query: {
        page: Math.max(currentPage - 1, 1)
      },
      persistQuery: true
    }}>&lt; PREV</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link replaceState className='paginate-prev' href={{
      query: {
        page: currentPage + 1
      }
    }}>NEXT &gt;</Link>
  </div>
)

Paginate.propTypes = {
  onClick: PropTypes.func,
  currentPage: PropTypes.number
}

export default Paginate
