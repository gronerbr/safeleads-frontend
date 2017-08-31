import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import history from './history'
import routes from './Routes.jsx'
import store from './store'
import './Vendor.jsx'

registerServiceWorker()

const Routes = routes(history)
const Store = store(history)

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
