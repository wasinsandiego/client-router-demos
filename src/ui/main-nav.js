import React from 'react'
import PropTypes from 'prop-types'
import './main-nav.css'

import NavItem from './nav-item'

const MainNav = ({ data }) => {
  const NavItems = data.map((item, key) => <NavItem {...item} key={`${key}-${item.url}`} />)
  return (
    <nav className='nav'>
      <ul className='nav-items'>
        {NavItems}
      </ul>
    </nav>
  )
}

const { array } = PropTypes

MainNav.propTypes = {
  data: array.isRequired
}

export default MainNav
