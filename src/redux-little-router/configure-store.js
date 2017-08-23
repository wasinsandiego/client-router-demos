import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import initialState from '../initial-state'
import * as appReducers from '../reducers'
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router'
import routes from './routes'
import fetchPageData from './middleware/fetch-page-data'

const { reducer, enhancer, middleware } = routerForBrowser({ routes })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const configureStore = (state) => {
  const store = createStore(
    combineReducers({ router: reducer, ...appReducers }),
    state,
    composeEnhancers(
      enhancer,
      applyMiddleware(
        fetchPageData,
        sagaMiddleware,
        middleware
      )
    )
  )

  store.initLocation = () => {
    const initialLocation = store.getState().router
    if (initialLocation) store.dispatch(initializeCurrentLocation(initialLocation))
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

export default configureStore(initialState)
