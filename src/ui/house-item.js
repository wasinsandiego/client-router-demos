import React from 'react'
import PropTypes from 'prop-types'
import './list-item.css'

const HouseItem = ({ url, name, region, coatOfArms }) => (
  <li className='house-item'>
    <div className='house-item-title'><a href={url}>{name}</a></div>
    <div className='house-item-description'>{region} region</div>
    <div className='house-item-coat-arms'>{coatOfArms}</div>
  </li>
)

const { string } = PropTypes

HouseItem.propTypes = {
  url: string,
  name: string,
  region: string,
  coatOfArms: string
}

export default HouseItem

