import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import initialState from './initial-state'
import * as appReducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const configureStore = (state) => {
  const store = createStore(
    combineReducers({ ...appReducers }),
    state,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

export default configureStore(initialState)
