import React from 'react'
import PropTypes from 'prop-types'
import './list-item.css'

const CharacterItem = ({ url, name, aliases, playedBy, died }) => (
  <li className={`character-item ${died ? 'is-dead' : ''}`}>
    <div className='character-item-title'>
      {name && <a href={url}>{name}</a>}
      {!name && aliases && aliases.length && <a href={url}>{aliases.join(', ')}</a>}
      {name && aliases && aliases.length &&
        <span className='character-item-aliases'>&nbsp;({aliases.join(', ')})</span>
      }
    </div>
    {playedBy && playedBy[0] && <div className='character-item-description'>Played by: {playedBy[0]}</div>}
    <div className='character-item-status'>{died ? 'They dead.' : 'Alive for now.' }</div>
  </li>
)

const { string, array } = PropTypes

CharacterItem.propTypes = {
  url: string,
  name: string,
  aliases: array,
  playedBy: array,
  died: string
}

export default CharacterItem

