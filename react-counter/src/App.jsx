import { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Counter } from './Counter'
import './App.css'

function App() {


  return (
    <>
      <Header/>
      <main>
        <Counter/>
      </main>
      <Footer/>
    </>
  )
}

export default App
