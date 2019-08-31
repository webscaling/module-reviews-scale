import React from 'react';
import Review from './Review.jsx'

const ReviewContainer = (props) => {
  console.log(props)
  return (
    <div id='rev_reviews_container'>
      <span>{`Showing ${props.reviewArray.length} reviews`}</span>
      <select id='rev_sort' onChange={(e) => props.handleSortChange(e)}>
        {props.listOrder.map((orderType)=> {
          return <option value={orderType}>{orderType}</option>
        })}
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