
import './App.css'
import {Header,Footer} from './components'
import {Diogenes, Seneca, Aurelius, Home} from './components/Pages'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/Aurelius'element={<Aurelius/>}/>
          <Route path='/Seneca'element={<Seneca/>}/>
          <Route path='/Diogenes'element={<Diogenes/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
