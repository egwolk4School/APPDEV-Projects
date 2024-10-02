import React,{useState, useEffect} from 'react'
import './Diogenes.css'
export const Diogenes = () => {
    useEffect(()=>{
        document.title='Stoic Quotes | Diogenes'
      },[])
    const [quote, quoteSet] = useState(0)
    const quotes = [
        "It is not that I am mad, it is only that my head is different from yours.", 
        "Of what use is a philosopher who doesn't hurt anybody's feelings?.", 
        "In a rich man's house there is no place to spit but his face.", 
        "I am a citizen of the world.",
        "The foundation of every state is the education of its youth.",
        "It takes a wise man to discover a wise man."
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
