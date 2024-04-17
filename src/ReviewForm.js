import React, { useState } from 'react';
import Stars from './Stars';

function ReviewForm({ addReview }) {
    // Default settings
  let [input, setInput] = useState('');
  let [rating, setRating] = useState(0);

  let handleSubmit = (e) => {
    e.preventDefault();
    // Only allows a review to go through if the user has actually given anything, won't let you submit a blank review. Requires both text and a star rating.
    if (input.trim() && rating > 0) {
      addReview(input, rating);
      setInput(''); // To be changed on submission
      setRating(0); // Reset the rating after submission
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <textarea
        className="review-input"
        value={input} //Takes the user input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Leave a review..."
      ></textarea>
      <Stars rating={rating} setRating={setRating} readOnly={false} />
      {/* ReadOnly status changed for the sake of submission, reverts to true by default afterwards. */}
      <button type="submit" className="submit-btn">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
