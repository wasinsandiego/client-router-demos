import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Fragment } from 'redux-little-router'

import MainNav from './main-nav'
import Paginate from './paginate'
import Characters from '../pages/characters'
import Houses from '../pages/houses'
import Books from '../pages/books'
import '../app.css'


// const choosePage = (pageType) => {
//   switch (pageType) {
//     case 'CHARACTERS':
//       return <Characters />
//     case 'HOUSES':
//       return <Houses />
//     case 'BOOKS':
//       return <Books />
//     default:
//       return null
//   }
// }

const choosePage = (pathname) => {
  if (pathname.indexOf('/characters') === 0) {
    return <Characters />
  }

  if (pathname.indexOf('/houses') === 0) {
    return <Houses />
  }

  if (pathname.indexOf('/books') === 0) {
    return <Books />
  }

  return <h1>WTF</h1>
}


export class App extends Component {

  render() {

    const { type, pathname, query = {} } = this.props.location || {}
    const currentPage = query.page || 1
    return (
      <div className='app'>
        <MainNav />
        <h1>Game of Thrones</h1>
        <hr />
        <main className='page'>
          <Paginate currentPage={parseInt(currentPage, 10)} currentPageId={type} />
          {choosePage(pathname)}
          <Paginate currentPage={parseInt(currentPage, 10)} currentPageId={type} />
        </main>
      </div>
    )
  }

}

App.propTypes = {
  // mapStateToProps
  metadata: PropTypes.object,
  location: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.metadata,
  location: state.location
})

const mapDispatchToProps = {}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
