import React from 'react'
import ReactDOM from 'react-dom/client'
//We are importing css here becasue it will apply over all the jsx.(globally)
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import '../css/index.css'
import HeadComponent from './Head.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />
    <HeadComponent />
    
  </React.StrictMode>,
)
