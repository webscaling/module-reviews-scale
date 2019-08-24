import React from 'react';

const ReviewSummary = (props) => {
  return (
    <div id='aggregate_container'>
      <h1 class='rev_rev_container_header'>22 Customer Reviews</h1>
      <div id='rev_star_container'>
        <i id='rev_overall_stars'></i>
        <div>3.8 out of 5 stars</div>
      </div>
      <table id='rev_breakdown_table'>
        <tr>
          <td>5 star</td>
          <td></td>
          <td>50%</td>
        </tr>
        <tr>
          <td>4 star</td>
          <td></td>
          <td>50%</td>
        </tr>
        <tr>
          <td>3 star</td>
          <td></td>
          <td>50%</td>
        </tr>
        <tr>
          <td>2 star</td>
          <td></td>
          <td>50%</td>
        </tr>
        <tr>
          <td>1 star</td>
          <td></td>
          <td>50%</td>
        </tr>
      </table>
    </div>
  )
}

export default ReviewSummary