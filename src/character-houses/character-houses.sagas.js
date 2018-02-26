import { takeEvery, call, put } from 'redux-saga/effects'
import { get } from 'lodash'
import api from '../api'
import actions from './character-houses.actions'

function * getCharacter (action) {
  const { payload = {} } = action
  let characterResponse
  let allegiancesResponse

  yield put(actions.request({}))

  // --------------------------------------------
  //  Get Character
  // --------------------------------------------
  try {
    characterResponse = yield call(api.get, {
      baseUrl: 'https://anapioficeandfire.com/api',
      endpoint: `/characters/${payload.characterId}`
    })
  } catch (error) {
    console.error('error for get characters: ', error)
    yield put(actions.failure({ error: error.message }))
    return yield put(actions.fulfill({ isLoading: false }))
  }

  // --------------------------------------------
  //  Get Allegiances
  // --------------------------------------------
  try {
    // get the allegiances url from the character response and make the API call
    const allegiancesUrl = get(characterResponse, 'data[0].allegiances[0]')
    allegiancesResponse = yield call(api.get, {
      baseUrl: 'https://anapioficeandfire.com/api',
      endpoint: allegiancesUrl.split('https://anapioficeandfire.com/api')[1]
    })

    // collect the data from the characters response AND the allegiances response
    // and construct a payload
    const character = get(characterResponse, 'data[0]')
    const houses = get(allegiancesResponse, 'data')
    const payload = { character, houses }

    // dispatch the action for success!
    yield put(actions.success(payload))
  } catch (error) {
    console.error('error for get allegiances: ', error)
    yield put(actions.failure({ error }))
  } finally {
    yield put(actions.fulfill({ isLoading: false }))
  }
}

export const watchGetCharacterHouses = function * watchGetCharacterHouses () {
  yield takeEvery(actions.TRIGGER, getCharacter)
}

export default watchGetCharacterHouses
