import app_noRouter from './app.no-router'
// import app_reduxLittleRouter from './store.redux-little-router'
//
switch (process.env.ROUTER) {
  case 'redux-little-router':
    // module.exports = app_reduxLittleRouter
    break
  default:
    module.exports = app_noRouter
}
