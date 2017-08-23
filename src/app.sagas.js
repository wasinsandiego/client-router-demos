import { takeEvery, call, fork, put, all } from 'redux-saga/effects'
import {
  API_CALL,
  GET_CHARACTERS,
  GET_HOUSES,
  GET_BOOKS,
  apiCall,
  getCharacters,
  getHouses,
  getBooks
} from './app.actions'
import api from './api'

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

//  ROOT SAGA
export default function * root () {
  yield all([
    fork(watch_apiCall),
    fork(watch_getCharacters),
    fork(watch_getHouses),
    fork(watch_getBooks)
  ])
}
