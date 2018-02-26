/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThingCount from './thing_count'
import './thing.css'

const thingClicked = null

export const Thing = ({ title, description, count, onThingClicked }) => (
  <div className='thing'>
    <h2 className='thingTitle'>{title}</h2>
    <p className='thingDescription'>{description}</p>
    <ThingCount count={count} />
    <button className='thingButton' onClick={onThingClicked}>Click Thing</button>
  </div>
)

Thing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.number,
  onThingClick: PropTypes.func
}

export default Thing

// const mapStateToProps = (state, ownProps) => ({
//   thingClickCount: getThingClickCount(state)
// })

// const mapDispatchToProps = {
//   thingClicked
// }

// const ThingContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Thing)

// export default ThingContainer
/* eslint-disable */
