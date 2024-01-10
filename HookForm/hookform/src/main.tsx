import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import Page from './Page.tsx'
import Nav from './Nav'
import './index.css'
import './Navbar.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav/>
    {/* <App /> */}
    <Page/>
  </React.StrictMode>,
)
