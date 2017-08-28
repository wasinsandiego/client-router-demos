import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import initialState from '../initial-state'
import * as appReducers from '../reducers'
import { router5Middleware, router5Reducer } from 'redux-router5'
// import fetchPageData from './middleware/fetch-page-data'
import createRouter from './router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const router = createRouter()

const configureStore = (router, state) => {
  const store = createStore(
    combineReducers({ router: router5Reducer, ...appReducers }),
    state,
    composeEnhancers(applyMiddleware(
      // fetchPageData,
      sagaMiddleware,
      // router5Middleware
    ))
  )

  // ?? window.store = store
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  store.router = router
  return store
}

export default configureStore(router, initialState)
