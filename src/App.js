import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import Router from './Router'
import './styles/index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App