import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import List from './List.tsx'
import Register from './Page.tsx'
import Nav from './Nav'
import './index.css'
import './Navbar.css'
import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
    children: [
      {
        path: "list",
        element: <List/>,
      },
      {
        path: "register",
        element: <Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
