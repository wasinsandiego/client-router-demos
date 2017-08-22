import React from 'react'
import PropTypes from 'prop-types'
import './nav-item.css'

const NavItem = ({ url, label, selected}) => (
  <li className={`nav-item ${selected ? 'selected' : '' }`}>
    <a className='nav-item-cta' href={url}>{label}</a>
  </li>
)

const { string, bool } = PropTypes

NavItem.propTypes = {
  url: string,
  label: string.isRequired,
  selected: bool
}

export default NavItem

