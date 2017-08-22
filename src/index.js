import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './configure-store'
import rootSagas from './app/app.sagas'
import App from './app'
import './index.css'

store.runSaga(rootSagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
