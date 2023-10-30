// Rating.js
import React, { useState } from 'react';

const Rating = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = e => {
    setRating(parseInt(e.target.value, 10));
  }

  const handleSubmit = () => {
    onSubmit(rating);
  }

  return (
    <div>
      <h2>Supplier Assessment</h2>
      <label htmlFor="rating">Rating:</label>
      <select id="rating" onChange={handleRatingChange} value={rating}>
        <option value={1}>1 star</option>
        <option value={2}>2 stars</option>
        <option value={3}>3 stars</option>
        <option value={4}>4 stars</option>
        <option value={5}>5 stars</option>
      </select>
      <button onClick={handleSubmit}>Submit Assessment</button>
    </div>
  );
}

export default Rating;
