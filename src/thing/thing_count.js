import React from 'react'
import PropTypes from 'prop-types'
import './thing_count.css'

export const ThingCount  = ({ count }) => (
  <div className='thingCount'>
    Thing clicked this many: <span>{count}</span>
  </div>
)

ThingCount.propTypes = {
  count: PropTypes.number
}

export default ThingCount
