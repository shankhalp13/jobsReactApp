import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <h1>Hello World</h1> */}
    <App /> {/*This is where the complete rendering is done about the page.*/}
  </React.StrictMode>,
)
