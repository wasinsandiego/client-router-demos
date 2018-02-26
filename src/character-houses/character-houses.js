/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

export const CharacterHouses = ({
  characterName,
  characterTitle,
  houses
}) => (
  <div className='thing'>
    <h2 className='thingTitle'>{characterName}</h2>
    <h4 className='thingTitle'>{characterTitle}</h4>
    <h5>Houses...</h5>
    <ul>
      {console.log('houses: ', houses)}
      {houses.map((house, index) => (
        <li key={`${house}-${index}`} >{house}</li>
      ))}
    </ul>
  </div>
)

CharacterHouses.propTypes = {
  characterName: PropTypes.string,
  characterTitle: PropTypes.string,
  characterHouses: PropTypes.array
}

export default CharacterHouses
