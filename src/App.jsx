import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CustomRoutes from './Routes'

function App() {


  return (
    <div className='flex justify-between'>
  <Navbar/>
  <CustomRoutes/>
    </div>
  )
}

export default App
