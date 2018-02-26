import { takeEvery, call, fork, put, all, select } from 'redux-saga/effects'
import { merge, mergeWith, pickBy, identity } from 'lodash'
import { push } from 'redux-little-router'
import {
  API_CALL,
  GET_CHARACTERS,
  GET_HOUSES,
  GET_BOOKS,
  PUSH_PERSIST,
  apiCall,
  getCharacters,
  getHouses,
  getBooks
} from './app.actions'
import api from './api'

import { sagas as watchGetCharacterHouses } from './character-houses'

/**
 *  SUB-ROUTINES
 */
// generic bindable generator to call api and dispatch appropriate success action.
// TODO: dispatch failures here as well.
function * doCall (apiFunc, actionCreator, action) {
  const { payload } = action
  const response = yield call(apiFunc, { ...payload })
  yield put(actionCreator.success(response))
}

/**
 *  BINDINGS
 *  Binding subroutines to specific api calls and action creators
 */
const fetchApiCall = doCall.bind(null, apiCall, api.get)
const fetchCharacters = doCall.bind(null, api.getCharacters, getCharacters)
const fetchHouses = doCall.bind(null, api.getHouses, getHouses)
const fetchBooks = doCall.bind(null, api.getBooks, getBooks)

/**
 *  WORKERS
 */
function * do_apiCall (action) {
  yield call(fetchApiCall, action)
}

function * do_getCharacters (action) {
  yield call(fetchCharacters, action)
}

function * do_getHouses (action) {
  yield call(fetchHouses, action)
}

function * do_getBooks (action) {
  yield call(fetchBooks, action)
}


// const validPushKeys = ['pathname', 'query']
// function * do_pushPersist (action) {
//   const { payload } = action
//   const { pathname, query } = yield select(state => state.router)
//   const pushPayload = mergeWith({}, { pathname, query }, payload, (objValue, srcValue) => {
//     if (isObject(objValue) pickBy(pushPayload, identity))
//   })
//   console.log('pushPayload', pickBy(pushPayload, identity))
//   yield put(push(pickBy(pushPayload, identity)))
// }


const mergeForPush = (next, prev) => (
  mergeWith({}, next, prev, (objValue, srcValue, key) => (
    // objValue is prev, srcValue is next
    (key === 'query' && objValue && srcValue) ?
      pickBy(merge(srcValue, objValue), identity) :
      objValue || srcValue
  ))
)

function * do_pushPersist (action) {
  const { payload } = action
  const { pathname, query } = yield select(state => state.router)
  const nextRouterState = mergeForPush(payload, { pathname, query })
  yield put(push(nextRouterState))
}

/**
 *  WATCHERS
 */
function * watch_apiCall () {
  yield takeEvery(API_CALL.REQUEST, do_apiCall)
}

function * watch_getCharacters () {
  yield takeEvery(GET_CHARACTERS.REQUEST, do_getCharacters)
}

function * watch_getHouses () {
  yield takeEvery(GET_HOUSES.REQUEST, do_getHouses)
}

function * watch_getBooks () {
  yield takeEvery(GET_BOOKS.REQUEST, do_getBooks)
}

function * watch_pushPersist () {
  yield takeEvery(PUSH_PERSIST, do_pushPersist)
}

//  ROOT SAGA
export default function * root () {
  yield all([
    fork(watchGetCharacterHouses),
    fork(watch_apiCall),
    fork(watch_getCharacters),
    fork(watch_getHouses),
    fork(watch_getBooks),
    fork(watch_pushPersist)
  ])
}
