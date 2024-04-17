import React from 'react';

function Stars({ rating, setRating, readOnly = false }) {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index}
                style={{ color: index < rating ? 'orange' : 'grey', cursor: readOnly ? 'default' : 'pointer' }}
                onClick={!readOnly ? () => setRating(index + 1) : undefined}>
            &#9733;
            {/* &#9733 is the html unicode star symbol, this code displays 5 stars in an array, then uses the array to change whatever is selected to orange, grey by default. */}
            {/* Readonly is needed to not change ratings after submission. */}
          </span>
        ))}
      </div>
    );
  }
  
  export default Stars;
  
  
