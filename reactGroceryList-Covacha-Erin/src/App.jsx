import './App.css'
import { Header } from './Header'
import {Footer} from './Footer'
import Shop from './Shop'
function App() {
  let items =[
    {id:1, name:'Grapes', price:10},
    {id:2, name:'Oranges', price:15},
    {id:3, name:'Kiwis', price:20},
    {id:4, name:'Bananas', price:25},
    {id:5, name:'Cucumbers', price:30},
  ]
  return (
    <>
      <Header/>
      <main>
       <Shop items={items}/>
      </main>
       <Footer/>
    </>
  )
}

export default App
