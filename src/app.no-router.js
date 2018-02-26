import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './app.css'

import {
  actions as characterHousesActions,
  selectors as characterHousesSelectors,
  CharacterHouses
} from './character-houses'

console.log('characterHousesActions.TRIGGER: ', characterHousesActions.TRIGGER)

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      characterId: ''
    }
  }

  componentDidMount () {
    this.props.getCharacterHouses({ characterId: this.state.characterId })
  }

  updateCharatcerId = (event) => {
    this.setState({ characterId: event.target.value })
  }

  onButtonClicked = () => {
    this.props.getCharacterHouses({ characterId: this.state.characterId })
  }

  render() {
    const { characterName, characterTitle, characterHouses } = this.props
    return (
      <div className='app'>
        <h1>Game of Thrones</h1>
        <hr />
        <main className='page'>
          <input
            type='text'
            placeholder='Enter charcter ID'
            value={this.state.characterId}
            onChange={this.updateCharatcerId}
          />
          <button
            type='button'
            onClick={this.onButtonClicked}
          >
            Get Character Houses
          </button>
          {characterName && characterTitle &&
            <CharacterHouses
              characterName={characterName}
              characterTitle={characterTitle}
              houses={characterHouses}
            />
          }
        </main>
      </div>
    )
  }

}

App.propTypes = {
  // mapStateToProps
  characterName: PropTypes.string,
  characterTitle: PropTypes.string,
  characterHouses: PropTypes.array,
  // mapDispatchToProps
  getCharacterHouses: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  characterName: characterHousesSelectors.characterName(state),
  characterTitle: characterHousesSelectors.characterTitle(state),
  characterHouses: characterHousesSelectors.characterHouses(state)
})

const mapDispatchToProps = {
  getCharacterHouses: characterHousesActions.trigger
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
