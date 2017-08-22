import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List from '../ui/list'
import HousesItem from '../ui/house-item'

class HousesPage extends Component {

  render () {
    return (
      <article>
        <h2>Houses</h2>
        <List data={this.props.houses.data} ListItem={HousesItem} />
      </article>
    )
  }
}

HousesPage.propTypes = {
  houses: PropTypes.object
}

const mapStateToProps = (state) => ({
  houses: state.houses
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HousesPage)
