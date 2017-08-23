import React from 'react'
import PropTypes from 'prop-types'
import './nav-item.css'

const NavItem = ({ url, label, selected }) => (
  <li className={`nav-item ${selected ? 'selected' : '' }`}>
    <a className='nav-item-cta' href={url}>{label}</a>
  </li>
)

NavItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool
}

export default NavItem

