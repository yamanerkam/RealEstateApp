import { useState } from 'react'
import './App.css'
import './layout.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Routes/HomePage/HomePage'
function App() {

  return (
    <div className="layout">
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App
