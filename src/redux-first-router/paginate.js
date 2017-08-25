import React from 'react'
import PropTypes from 'prop-types'
import Link from 'redux-first-router-link'
import '../ui/main-nav.css'
import '../ui/nav-item.css'

const Paginate = ({ onClick, currentPageId, currentPage = 1 }) => (
  <div className='paginate'>
    <Link className='paginate-prev' to={{
      type: currentPageId,
      query: {
        page: Math.max(currentPage - 1, 1)
      }
    }}>&lt; PREV {currentPage}</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link className='paginate-prev' to={{
      type: currentPageId,
      query: {
        page: currentPage + 1
      }
    }}>NEXT &gt; {currentPage}</Link>
  </div>
)

Paginate.propTypes = {
  onClick: PropTypes.func,
  currentPageId: PropTypes.string,
  currentPage: PropTypes.number
}

export default Paginate
