import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootSagas from './app.sagas'
import './index.css'

/**
 * redux-little-router example
 */
import store from './redux-little-router/configure-store'
import App from './redux-little-router/app'

store.runSaga(rootSagas)
store.initLocation()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
