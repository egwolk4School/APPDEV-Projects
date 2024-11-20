import React,{useState} from 'react'

import Login from './Login'
import './Reviews.css'
import GameCards from './GameCards';
var games = [];
export default function Reviews(props) {
    const [title, setTitle] = useState('')
    const [gameReview, setGameReview] = useState('')
    function handleTitleChange(event) {
        setTitle(event.target.value);
    }
    function handleGameReviewChange(event) {
        setGameReview(event.target.value);
    }
    function addGame(){
        games.push(
            {
                title: title,
                gameReview: gameReview,
            }
        )
        alert("Review added!")
            setTitle('');
            setGameReview('');
    }
    if(props.isLoggedIn === false){
        return <Login/>
    }else{
        return (
            <>
                <div className="section">
                    <div className="container">
                        <div className="review-form">
                            <h2>New Review</h2> <br />
                            <strong>Game Title:</strong> <input type="text" value={title} onChange={handleTitleChange}/> <br/> <br/> 
                            <strong>Game Review:</strong><br /><textarea name="review" id="review" cols="30" rows="10" value={gameReview} onChange={handleGameReviewChange}></textarea><br /><br/> 
                            <button onClick={addGame}>Submit</button>
                        </div>
                        <div className="gamecard">
                            <h2>Game review to be added:</h2><br/> 
                            <p>Game Title: <strong>{title}</strong></p><br/>
                            <p>Game Review: <strong>{gameReview}</strong></p><br/>
                            
                        </div>
                        <div className="gamelist">
                            {games.length>0?(<GameCards games={games}/>):(<p>No Game Reviews.</p>)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
   
}