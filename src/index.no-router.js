import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootSagas from './app.sagas'
import './index.css'

/**
 * no router example
 */
import store from './configure-store'
import App from './app.no-router'

store.runSaga(rootSagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
