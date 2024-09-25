import { useState } from 'react'
// import './App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { ColorPicker } from './ColorPicker'
function App() {
 

  return (
    <>
      <Header/>
      <main>
      <ColorPicker/>
      </main>
      <Footer/>
    </>
  )
}

export default App
