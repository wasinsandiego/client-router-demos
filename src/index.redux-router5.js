import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5';
import rootSagas from './app.sagas'
import './index.css'

/**
 * redux-router5 example
 */
import store from './redux-router-5/configure-store'
import App from './redux-router-5/app'

console.log('store: ', store)
const { router } = store
const wrappedApp = (
  <Provider store={store}>
    <RouterProvider router= {router}>
      <App />
    </RouterProvider>
  </Provider>
)

store.runSaga(rootSagas)

router.start((err, state) => {
    ReactDOM.render(wrappedApp, document.getElementById('root'))
})
