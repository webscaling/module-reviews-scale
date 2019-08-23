import React from 'react';

const ReviewSummary = (props) => {
  return (
    <div id='aggregate_container'>
      <h1 class='rev_rev_container_header'>22 Customer Reviews</h1>
      <div id='rev_star_container'>
        <i id='rev_overall_stars'></i>
        <div>3.9 out of 5 stars</div>
      </div>
    </div>
  )
}

export default ReviewSummary