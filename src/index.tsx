import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import AppRoutes from './services/routing/index.tsx'
import store from './redux/store.ts'
import './i18n'

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
