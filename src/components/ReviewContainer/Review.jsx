import React from 'react';

const Review = (props) => {
  console.log(props.reviewData)
  return(
    <div id='rev_review'>
      <div className={'rev_pic_title'}>
        <img className={'rev_avatar'} src={props.reviewData.avatarURL} />
        <span className={'rev_author'}>Elmo Street</span>
      </div>
      <div className={'rev_rev_rating_stars'}>
        <div className={'rev_rev_stars'}>
          <i className={'fas fa-star rev_star'}></i>
          <i className={'fas fa-star rev_star'}></i>
          <i className={'fas fa-star rev_star'}></i>
          <i className={'fas fa-star-half-alt rev_star'}></i>
          <i className={'far fa-star rev_star'}></i>
        </div>
        <span className={'rev_rev_title'}>{props.reviewData.title}</span>
      </div>
      <span className={'rev_rev_date'}>July 7th, 2019</span>
      <span className={'rev_rev_text'}>{props.reviewData.text}</span>

    </div>
  )
}

export default Review