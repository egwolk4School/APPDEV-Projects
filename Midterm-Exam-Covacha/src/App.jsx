import {Header, Footer, Identification, FavoriteFood, Counter, Paragraph, Function, MyCart} from './Components'
import './App.css'

function App() {
  const fruits=[
    {id:1,name:'Grapes',color:'Violet',rating:10},
    {id:2,name:'Apple',color:'Red',rating:5},
    {id:3,name:'Banana',color:'Yellow',rating:10},
    {id:4,name:'Orange',color:'Orange',rating:8},
    {id:5,name:'Lime',color:'Green',rating:10},
]
const porkDishes=[]
  
  return (
    <>
      <Header/>
      <hr />
      <Identification/>
      {fruits.length>0 ?<FavoriteFood items={fruits} category='Fruits'/>:  "have no favorite fruits"}
      <hr />
      {porkDishes.length>0? <FavoriteFood items={porkDishes} category='Pork Dishes'/>:'I have no favorite Pork Dishes'}
      <hr />
      <Counter/>
      <hr />
      <Function/>
      <hr />
      <Paragraph/>
      <hr />
      <MyCart/>
      <hr />
      <Footer/>
    </>
  )
}

export default App
