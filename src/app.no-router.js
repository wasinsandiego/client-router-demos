import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './app.css'

import LoadingAnim from './loading-anim'
import {
  actions as characterHousesActions,
  selectors as characterHousesSelectors,
  CharacterHouses
} from './character-houses'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      characterId: ''
    }
  }

  componentDidMount () {
    // this.props.getCharacterHouses({ characterId: this.state.characterId })
  }

  updateCharatcerId = (event) => {
    this.setState({ characterId: event.target.value })
  }

  onButtonClicked = () => {
    this.props.getCharacterHouses({ characterId: this.state.characterId })
  }

  render() {
    const { characterName, characterTitle, characterAllegiances, characterHousesIsLoading } = this.props
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
          {!characterHousesIsLoading && characterName && characterTitle &&
            <CharacterHouses
              characterName={characterName}
              characterTitle={characterTitle}
              houses={characterAllegiances}
            />
          }
          {characterHousesIsLoading &&
            <LoadingAnim />
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
  characterAllegiances: PropTypes.array,
  characterHousesIsLoading: PropTypes.bool,
  // mapDispatchToProps
  getCharacterHouses: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  characterName: characterHousesSelectors.characterName(state),
  characterTitle: characterHousesSelectors.characterTitle(state),
  characterAllegiances: characterHousesSelectors.characterAllegiances(state),
  characterHousesIsLoading: characterHousesSelectors.characterHousesLoadingStatus(state)
})

const mapDispatchToProps = {
  getCharacterHouses: characterHousesActions.trigger
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
