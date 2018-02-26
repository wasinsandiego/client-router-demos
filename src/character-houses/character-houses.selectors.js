import { createSelector } from 'reselect'
import { get } from 'lodash'

const getCharacter = state => get(state, 'characterHouses.data.character')
const getHouses = state => get(state, 'characterHouses.data.houses')
const getIsLoading = state => get(state, 'characterHouses.isLoading')

export const characterName = createSelector(
  getCharacter,
  character => character && character.name
)

export const characterTitle = createSelector(
  getCharacter,
  character => character && character.titles && character.titles[0]
)

export const characterAllegiances = createSelector(
  getHouses,
  houses => houses && houses.map(house => house.name)
)

export const characterHousesLoadingStatus = createSelector(
  getIsLoading,
  isLoading => isLoading
)
