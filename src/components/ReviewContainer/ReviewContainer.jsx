import React from 'react';
import Review from './Review.jsx'

const ReviewContainer = (props) => {
  return (
    <div id='rev_reviews_container'>
      <span>{`Showing ${props.reviewArray.length} reviews`}</span>
      <select aria-label='Sort Reviews by most helpful or most recent' 
              id='rev_sort' 
              onChange={(e) => props.handleSortChange(e)}>
        {props.listOrder.map((orderType)=> {
          return <option label={orderType} value={orderType}>{orderType}</option>
        })}
      </select>
      <div id={'rev_rev_stream'}>
        {
          props.reviewArray.map((review) => {
            return <Review reviewData={review}
                           handleHelpful={props.handleHelpful}
                           currentUser={props.currentUser}/>
          })
        }
      </div>
    </div>
  )
}

export default ReviewContainer