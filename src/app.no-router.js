import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCharacters, getHouses, getBooks } from './app.actions'
import { thingClicked, getThingClickCount } from './thing'

import MainNav from './ui/main-nav'
// eslint-disable-next-line
import Characters from './pages/characters'
// eslint-disable-next-line
import Houses from './pages/houses'
// eslint-disable-next-line
import Books from './pages/books'

import { Thing } from './thing/thing'

import './app.css'

export class App extends Component {
  componentDidMount () {
    this.props.getCharacters({ query: { page: 1, pageSize:10 } })
    // this.props.getHouses({ query: { page: 1, pageSize:10 } })
    // this.props.getBooks({ query: { page: 1, pageSize:10 } })
  }

  thingClicked = () => this.props.thingClicked({ count: this.props.thingClickCount + 1 })

  render() {
    const { nav } = this.props
    return (
      <div className='app'>
        <MainNav data={nav}/>
        <h1>Game of Thrones</h1>
        <hr />
        <main className='page'>
          <Thing
            title='THING'
            description='This is a thing.'
            count={this.props.thingClickCount}
            onThingClicked={this.thingClicked}
          />
          {/*
          <Characters />
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
  thingClickCount: PropTypes.number,
  // mapDispatchToProps
  getCharacters: PropTypes.func,
  getHouses: PropTypes.func,
  getBooks: PropTypes.func,
  thingClicked: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  metadata: state.metadata,
  nav: state.nav,
  thingClickCount: getThingClickCount(state)
})

const mapDispatchToProps = {
  getCharacters: getCharacters.request,
  getHouses: getHouses.request,
  getBooks: getBooks.request,
  thingClicked
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
