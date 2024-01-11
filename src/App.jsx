import React from 'react'
import './App.css'

import './components/Pages/Homep'
import { Route, Routes } from 'react-router-dom'
import Homep from './components/Pages/Homep'
import Aboutp from './components/Pages/Aboutp'
import Packages from './components/Pages/Packages'
import Services from './components/Pages/Services'



function App() {    
  return (
    <>
    <Routes>
      <Route path='/' element={<Homep/>}/>
      <Route path='/about' element={<Aboutp/>}/>
      <Route path='/Packages' element={<Packages/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App
