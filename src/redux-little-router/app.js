import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Fragment } from 'redux-little-router'

import MainNav from './main-nav'
import Characters from '../pages/characters'
import Houses from '../pages/houses'
import Books from '../pages/books'
import '../app.css'




export class App extends Component {

  render() {
    return (
      <div className='app'>
        <MainNav />
        <h1>Game of Thrones</h1>
        <hr />
        <main className='page'>
          <Fragment forRoute='/characters(/:id)'>
            <Characters />
          </Fragment>
          <Fragment forRoute='/houses(/:id)'>
            <Houses />
          </Fragment>
          <Fragment forRoute='/books(/:id)'>
            <Books />
          </Fragment>
        </main>
      </div>
    )
  }

}

App.propTypes = {
  // mapStateToProps
  metadata: PropTypes.object,
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.metadata,
  router: state.router
})

const mapDispatchToProps = {}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
