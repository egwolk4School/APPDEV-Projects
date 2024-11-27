import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
export const Review = () => {
    const location = useLocation()
    const {game, review} = location.state
  return (
    <>
        <div className="section">
            <div className="review-container">
                <h1>{game.name}</h1><br />
                <div className="review">
                    <div className="users">
                    <div className="circle">
                        <FontAwesomeIcon icon={faUser} className='user'/>
                    </div> &nbsp;
                    <h2>{review.reviewerName}</h2>
                    </div>
                    <div className="comment">
                        <h4 className="stars"> Rating: {review.rating}</h4><br />
                        <p>{review.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
