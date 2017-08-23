import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCharacters, getHouses, getBooks } from './app.actions'

import MainNav from './ui/main-nav'
// eslint-disable-next-line
import Characters from './pages/characters'
// eslint-disable-next-line
import Houses from './pages/houses'
// eslint-disable-next-line
import Books from './pages/books'

import './app.css'

export class App extends Component {
  componentDidMount () {
    this.props.getCharacters({ query: { page: 1, pageSize:10 } })
    // this.props.getHouses({ query: { page: 1, pageSize:10 } })
    // this.props.getBooks({ query: { page: 1, pageSize:10 } })
  }

  render() {
    console.log('this.props.nav: ', this.props)
    const { nav } = this.props
    return (
      <div className='app'>
        <MainNav data={nav}/>
        <h1>Game of Thrones</h1>
        <hr />
        <main className='page'>
          <Characters />
          {/*
          <Houses />
          <Books />
          */}
        </main>
      </div>
    )
  }

}

App.propTypes = {
  // mapStateToProps
  metadata: PropTypes.object,
  nav: PropTypes.array.isRequired,
  // mapDispatchToProps
  getCharacters: PropTypes.func,
  getHouses: PropTypes.func,
  getBooks: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.metadata,
  nav: state.nav
})

const mapDispatchToProps = {
  getCharacters: getCharacters.request,
  getHouses: getHouses.request,
  getBooks: getBooks.request
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
