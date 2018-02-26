import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List from '../ui/list'
import CharacterItem from '../ui/character-item'
import { pushPersist } from '../app.actions'
import { push } from 'redux-little-router'

class CharactersPage extends Component {

  componentDidMount() {
    setTimeout(() => {
      // this.props.push({
      //   query: {
      //     page: 2
      //   },
      //   persistQuery: true
      // })
      this.props.pushPersist({ query: { page: '2' } })
    }, 3000)
  }

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
  push,
  pushPersist
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage)
