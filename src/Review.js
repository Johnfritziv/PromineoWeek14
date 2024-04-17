import React from 'react';
import Stars from './Stars';

function Review({ text, rating }) {
  return (
    <div className="review">
      <p>{text}</p>
      <Stars rating={rating} readOnly={true}/>
      {/* Takes the text from the ReviewForm and the Star rating from the rating input array, turns the readOnly to true by default */}
    </div>
  );
}

export default Review;
