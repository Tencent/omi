import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import 'antd/dist/reset.css'
import './App.css'

function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>
}

export default App
