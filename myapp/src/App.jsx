import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}
