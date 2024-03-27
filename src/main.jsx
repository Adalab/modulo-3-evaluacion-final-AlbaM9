import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './scss/index.scss'
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(

  <HashRouter>
    <App />
  </HashRouter>

)
