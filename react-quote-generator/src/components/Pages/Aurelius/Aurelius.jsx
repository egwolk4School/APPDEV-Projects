import React,{useState} from 'react'
import './Aurelius.css'
export const Aurelius = () => {
    const [quote, quoteSet] = useState(0)
    const quotes = [
      "The soul becomes dyed with the colour of its thoughts.", 
      "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", 
      "The happiness of your life depends upon the quality of your thoughts.", 
      "Our life is what our thoughts make it.",
      "Waste no more time arguing about what a good man should be. Be one.",
      "The best revenge is to be unlike him who performed the injury."
    ]
    const getRandomNumber = () =>{
      let randomIndex;
      do {
          randomIndex = Math.floor(Math.random() * quotes.length);
      } while (randomIndex === quote); 
      quoteSet(randomIndex); 
  }
  
  const increment=()=>{
      quoteSet(c => (c + 1) % quotes.length);
  }
    const ranQuote=quotes[quote]
  return (
    <div className="container">
        <h2>Seneca
            <br />
            <span className="color">
                {ranQuote}
            </span>
        </h2>
        <button className="btn btn-hero" onClick={getRandomNumber}>Random</button>
        <button className="btn btn-hero" onClick={increment}>Increment</button>
    </div>
  )
}

