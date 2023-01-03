import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Router } from './pages/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Router />
  </React.StrictMode>,
)