import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Movie({ data }) {
  let [movie, setMovie] = useState(data);

  let addReview = (reviewText, reviewRating) => {
    let newReview = { text: reviewText, rating: reviewRating };
    let updatedReviews = [...movie.reviews, newReview];
    setMovie(prevMovie => ({
      ...prevMovie,
      reviews: updatedReviews
    }));
  };
  

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl} alt={movie.title} style={{ width: '100%' }} />
      <p>{movie.synopsis}</p>
      {/* <Stars rating={movie.rating} setRating={(rating) => setMovie({ ...movie, rating })} /> */}
      {/* Initially had ratings of each movie on themselves, but could keep changing it. Moved rating functionality to the reviews. */}
      <ReviewList reviews={movie.reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
}

export default Movie;
