import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List from '../ui/list'
import CharacterItem from '../ui/character-item'

class CharactersPage extends Component {

  render () {
    return (
      <article>
        <h2>Characters</h2>
        <List data={this.props.characters.data} ListItem={CharacterItem} />
      </article>
    )
  }
}

CharactersPage.propTypes = {
  characters: PropTypes.object
}

const mapStateToProps = (state) => ({
  characters: state.characters
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage)
