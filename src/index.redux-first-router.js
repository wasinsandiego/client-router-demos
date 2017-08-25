import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootSagas from './app.sagas'
import './index.css'

/**
 * redux-first-router example
 */
import store from './redux-first-router/configure-store'
import App from './redux-first-router/app'

store.runSaga(rootSagas)
store.initialDispatch()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
