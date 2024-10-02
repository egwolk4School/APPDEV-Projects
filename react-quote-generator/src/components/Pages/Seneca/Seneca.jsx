import React,{useState} from 'react'
import './Seneca.css'
export const Seneca = () => {
    const [quote, quoteSet] = useState(0)
    const quotes = [
        "Sometimes even to live is an act of courage.", 
        "Luck is what happens when preparation meets opportunity.", 
        "We suffer more often in imagination than in reality.", 
        "All cruelty springs from weakness.",
        "Difficulties strengthen the mind, as labor does the body.",
        "It is not the man who has too little, but the man who craves more, that is poor."
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


