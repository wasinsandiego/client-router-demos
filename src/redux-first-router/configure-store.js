import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import initialState from '../initial-state'
import * as appReducers from '../reducers'
import { connectRoutes } from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'
import queryString from 'query-string'
import routes from './routes'
import fetchPageData from './middleware/fetch-page-data'

const history = createHistory()
const { initialDispatch, reducer, middleware, enhancer } = connectRoutes(history, routes, { querySerializer: queryString })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

const configureStore = (state) => {
  const store = createStore(
    combineReducers({ location: reducer, ...appReducers }),
    state,
    composeEnhancers(
      enhancer,
      applyMiddleware(
        middleware, // <--- it's important this is before custom middleware otherwise the actions is not flushed out with router data
        fetchPageData,
        sagaMiddleware
      )
    )
  )

  store.initialDispatch = initialDispatch

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

export default configureStore(initialState)
