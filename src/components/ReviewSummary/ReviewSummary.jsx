import React from 'react';
import ProgressBar from './ProgressBar.jsx';

const ReviewSummary = (props) => {
  let sumReviews = 0;
  let numReviews = props.reviewArray.length;

  if(numReviews > 0){

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
  
    //Display % of reviews of a rating (1-5)
    let percentageOne = (ratingTracker[1] / numReviews * 100).toFixed(0);
    let percentageTwo = (ratingTracker[2] / numReviews * 100).toFixed(0);
    let percentageThree = (ratingTracker[3] / numReviews * 100).toFixed(0);
    let percentageFour = (ratingTracker[4] / numReviews * 100).toFixed(0);
    let percentageFive = (ratingTracker[5] / numReviews * 100).toFixed(0);
  
    //Determine star icon rendering
    let numFullStars = Math.floor(avgReviews);
    let halfStarDeterminer = (avgReviews % 1).toFixed(1);
    if(halfStarDeterminer >= 0.9) numFullStars++; //if avg ends in  .9, round up
    let halfStarAccounter = (halfStarDeterminer > 0.2 && halfStarDeterminer < 0.9) ? 1 : 0;
    let numEmptyStars = 5 - ( numFullStars + halfStarAccounter);
  
    //set up maps
    const fullStarChart = new Array(numFullStars).fill('*');
    const halfStarChart = new Array(halfStarAccounter).fill('*');
    const emptyStarChart = new Array(numEmptyStars).fill('*');
    
    return (
      <div id='aggregate_container'>
        <h1 class='rev_rev_container_header'>{`${numReviews} Customer Reviews`}</h1>
        <div id='rev_star_container'>
          <div id='rev_overall_stars'>
            {
              fullStarChart.map(() => {
                return <i className={'fas fa-star rev_agg_star'}></i>
              })
            }
            {
              halfStarChart.map(() => {
                return <i className={'fas fa-star-half-alt rev_agg_star'}></i>
              })
            }
            {
              emptyStarChart.map(() => {
                return <i className={'far fa-star rev_agg_star'}></i>
              })
            }
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

  } else {
    return (
      <div id='aggregate_container'>
        <h1 class='rev_rev_container_header'>{`${numReviews} Customer Reviews`}</h1>
      </div>
    )
  }


}

export default ReviewSummary