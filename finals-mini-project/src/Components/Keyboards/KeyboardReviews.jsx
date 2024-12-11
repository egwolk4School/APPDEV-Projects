import { useLocation } from "react-router-dom";
import { useState } from "react";
import { KeyboardReviewForm } from "./KeyboardReviewForm";
import { Stars } from "../Stars/Stars";

export const KeyboardReviews = () => {
  const location = useLocation();
  const { reviews: initialReviews } = location.state.keyboard;
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  const listReviews = reviews.map((review, index) => (
    <li key={index}>
      <strong>{review.reviewer}:</strong> {review.review} <br />
      <Stars rating={review.rating} readOnly={true} /> {/* Use Stars in read-only mode */}
    </li>
  ));

  return (
    <>
        <div className="user-in">
            <KeyboardReviewForm onAddReview={addReview} />
        </div>
        <h3>Reviews</h3>
        <ul>{listReviews}</ul>

      
    </>
  );
};
