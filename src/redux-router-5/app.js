import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Fragment } from 'redux-little-router'

// import MainNav from './main-nav'
// import Paginate from './paginate'
import Characters from '../pages/characters'
import Houses from '../pages/houses'
import Books from '../pages/books'
import '../app.css'




export class App extends Component {

  render() {
    // const currentPage = this.props.router.query.page || 1
    return (
      <div className='app'>
        {/* <MainNav />*/}
        <h1>Game of Thrones</h1>
        <hr />
        <main className='page'>
          {/*
          <Fragment forRoute='/characters(/:id)'>
            <span>
            <Paginate currentPage={parseInt(currentPage, 10)} />
            <Characters />
            <Paginate currentPage={parseInt(currentPage, 10)} />
            </span>
          </Fragment>
          <Fragment forRoute='/houses(/:id)'>
            <Houses />
          </Fragment>
          <Fragment forRoute='/books(/:id)'>
            <Books />
          </Fragment>
        */}
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
