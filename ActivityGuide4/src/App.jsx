import { Route, Routes} from 'react-router-dom'
import './App.css'
import {Home,About,NotFound,Games,Game, Nav, Review, Footer} from './Components'

function App() {

  return (
    <>
      <Nav/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/games'>
          <Route index element={<Games/>}/>
          <Route path=':gameId' element={<Game/>}/>
          <Route path="/games/:gameId/reviews/:reviewId" element={<Review />} />
        </Route>
      </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
