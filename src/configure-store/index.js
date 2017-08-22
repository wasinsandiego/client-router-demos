import store_noRouter from './store.no-router'
// import store_reduxLittleRouter from './store.redux-little-router'


switch (process.env.ROUTER) {
  case 'redux-little-router':
    // module.exports = store_reduxLittleRouter
    break
  default:
    module.exports = store_noRouter
}

