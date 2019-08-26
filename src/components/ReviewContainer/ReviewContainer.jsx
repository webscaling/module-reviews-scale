import React from 'react';
import Review from './Review.jsx'

const ReviewContainer = (props) => {
  return (
    <div id='rev_reviews_container'>
      <span>{`Showing ${props.reviewArray.length} reviews`}</span>
      <select id='rev_sort'>
        <option value='top_reviews'>Top Reviews</option>
        <option value='most_recent'>Most Recent</option>
      </select>
      <div id={'rev_rev_stream'}>
        {
          props.reviewArray.map((review) => {
            return <Review reviewData={review}/>
          })
        }
      </div>
    </div>
  )
}

export default ReviewContainer