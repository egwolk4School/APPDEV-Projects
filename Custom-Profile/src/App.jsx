import Header from './Nav/Header'
import Footer from './Footer/Footer'
import Profile from './ProfileCard/Profile'

// import './App.css'

function App() {


  return (
    <>
      <Header/>
      <main>
      <Profile name="Erin" course="CS" alive={true} age={21}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
