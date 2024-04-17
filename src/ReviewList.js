import React from 'react';
import Review from './Review';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} text={review.text} rating={review.rating} />
      ))}
    </div>
  );
}
// Puts the reviews all in a map to display one after another.
export default ReviewList;
