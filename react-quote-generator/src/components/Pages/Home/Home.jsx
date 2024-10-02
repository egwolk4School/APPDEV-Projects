import React,{useEffect} from 'react'
import './Home.css'
export const Home = () => {
  useEffect(()=>{
    document.title='Stoic Quotes | Home'
  },[])
  return (
    <>
        <div className="container">
        <h2>WELCOME TO MY RANDOM QUOTE GENERATOR!
            <br />
            <span className="color">
                Click on the philosopers above to see their quotes.
            </span>
        </h2>
        
    </div>
    </>
  )
}
