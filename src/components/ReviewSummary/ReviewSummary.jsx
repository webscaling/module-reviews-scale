import React from 'react';
import ProgressBar from './ProgressBar.jsx';

const ReviewSummary = (props) => {
  let sumReviews = 0;
  let numReviews = props.reviewArray.length;

  let ratingTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }

  props.reviewArray.forEach(review => {
    ratingTracker[review.rating]++;
    sumReviews += review.rating;
  })
  
  let avgReviews = (sumReviews / numReviews).toFixed(1);

  let percentageOne = (ratingTracker[1] / numReviews * 100).toFixed(0);
  let percentageTwo = (ratingTracker[2] / numReviews * 100).toFixed(0);
  let percentageThree = (ratingTracker[3] / numReviews * 100).toFixed(0);
  let percentageFour = (ratingTracker[4] / numReviews * 100).toFixed(0);
  let percentageFive = (ratingTracker[5] / numReviews * 100).toFixed(0);
  
  return (
    <div id='aggregate_container'>
      <h1 class='rev_rev_container_header'>{`${numReviews} Customer Reviews`}</h1>
      <div id='rev_star_container'>
        <div id='rev_overall_stars'>
          <i className={'fas fa-star rev_agg_star'}></i>
          <i className={'fas fa-star rev_agg_star'}></i>
          <i className={'fas fa-star rev_agg_star'}></i>
          <i className={'fas fa-star-half-alt rev_agg_star'}></i>
          <i className={'far fa-star rev_agg_star'}></i>
        </div>
        <div>{`${avgReviews} out of 5 stars`}</div>
      </div>
      <table id='rev_breakdown_table'>
        <tr>
          <td>5 star</td>
          <td>
            <ProgressBar percentage={percentageOne}/>
          </td>
          <td>{percentageOne + '%'}</td>
        </tr>
        <tr>
          <td>4 star</td>
          <td>
            <ProgressBar percentage={percentageTwo}/>
          </td>
          <td>{percentageTwo + '%'}</td>
        </tr>
        <tr>
          <td>3 star</td>
          <td>
            <ProgressBar percentage={percentageThree}/>
          </td>
          <td>{percentageThree + '%'}</td>
        </tr>
        <tr>
          <td>2 star</td>
          <td>
            <ProgressBar percentage={percentageFour}/>
          </td>
          <td>{percentageFour + '%'}</td>
        </tr>
        <tr>
          <td>1 star</td>
          <td>
            <ProgressBar percentage={percentageFive}/>
          </td>
          <td>{percentageFive + '%'}</td>
        </tr>
      </table>
    </div>
  )

}

export default ReviewSummary