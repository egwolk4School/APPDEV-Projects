
import { useLocation, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const reviews = [
  { id:1, reviewerName: "Slayer3000", rating: '★ ★ ★ ★', comment: "Great game, really enjoyed the gameplay!" },
  { id:2, reviewerName: "NoobMaster69", rating: '★ ★ ★ ★ ★', comment: "Amazing graphics and story, highly recommend." },
  { id:3, reviewerName: "AnonStar08", rating: '★ ★ ★', comment: "Good, but could use some improvements." },
  { id:4, reviewerName: "Girthatron77", rating: '★ ★ ★ ★', comment: "Fun experience overall, but a bit repetitive." },
  { id:5, reviewerName: "WhatTheSigma", rating: '★ ★ ★ ★ ★', comment: "One of the best games I've played this year!" },
];
export const Game = () => {
  const location = useLocation()
  const game = location.state.game
  return (
    <>
        <div className="section">
          <div className='container'>
              <h1>{game.name}</h1>
              <img src={game.poster} alt="gameposter"/>
              <p>{game.desc}</p>
          </div>
        </div>
        <div className="section">
          <div className='reviews'>
            <h2>Reviews</h2> 
            <ul>
              {reviews.map((review)=>(
                  <li  key={review.id} >
                    <Link to={`/games/${game.id}/reviews/${review.id}`} state={{game, review}} >
                      <div className="users">
                        <div className="circle">
                          <FontAwesomeIcon icon={faUser} className='user'/>
                        </div> &nbsp;
                        <h4>{review.reviewerName}</h4>
                      </div>
                      <div className="review-snippet">
                        <p className='stars'>Rating: {review.rating}</p>
                        <p>Read More...</p>
                      </div>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  )
}
