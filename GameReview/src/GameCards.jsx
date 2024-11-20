import React from 'react'

export default function GameCards(props) {
    const listOfGames = props.games
    const game = listOfGames.map(game=>
        <>
        <h4 key={game.title}>Title: {game.title}</h4>
        <h5>Review:</h5>
        <p>{game.gameReview}</p><br />
        </>)
  return (
    <>
        <div className="cards">
            <h2>Game Reviews</h2><br/> 
            {game}
        </div>
        
    </>
  )
}
