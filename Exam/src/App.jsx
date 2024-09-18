import { useState } from 'react'
import './App.css'
import {Footer, Nav} from './components'
import {Route, Routes} from 'react-router-dom'
import {Home, About, Setup, Use, Troubleshooting, Care,Support} from './components/Pages'
export default function App() {


  return (
    <>
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Setup' element={<Setup/>}/>
          <Route path='/Use' element={<Use/>}/>
          <Route path='/Troubleshooting' element={<Troubleshooting/>}/>
          <Route path='/Care' element={<Care/>}/>
          <Route path='/Support' element={<Support/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}


