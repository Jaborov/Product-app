import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Error } from "./pages/Error";
import { Menu } from './Layout/Menu';



import './index.css'
const router = createBrowserRouter([
    {
      path: '/',
      element: <Menu />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/product',
          element: <Product />
        },
      ]
    },
  {
    path: '*',
    element: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
