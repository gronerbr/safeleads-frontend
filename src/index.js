import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import Routes from './Routes.jsx'
import Store from './store'
import './Vendor.jsx'

registerServiceWorker()

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
