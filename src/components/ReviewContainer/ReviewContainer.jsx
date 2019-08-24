import React from 'react';
import Review from './Review.jsx'

const ReviewContainer = (props) => {
  return (
    <div id='rev_reviews_container'>
      <span>Showing 1 - 8 of 12 reviews</span>
      <select id='rev_sort'>
        <option value='top_reviews'>Top Reviews</option>
        <option value='most_recent'>Most Recent</option>
      </select>
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
    </div>
  )
}

export default ReviewContainer