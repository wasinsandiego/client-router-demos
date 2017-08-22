import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import initialState from './initial-state'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

export function configureStore(state) {
  const store = createStore(
    reducers,
    state,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}

export const store = configureStore(initialState)
