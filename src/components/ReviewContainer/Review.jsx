import React from 'react';

const Review = (props) => {
  const starMap = new Array(props.reviewData.rating).fill('*')
  const emptyStarMap = new Array(5 - props.reviewData.rating).fill('*')

  return(
    <div id='rev_review'>
      <div className={'rev_pic_title'}>
        <img className={'rev_avatar'} src={props.reviewData.avatarURL} />
        <span className={'rev_author'}>Elmo Street</span>
      </div>
      <div className={'rev_rev_rating_stars'}>
        <div className={'rev_rev_stars'}>
          {
            starMap.map(() => {
              return <i className={'fas fa-star rev_star'}></i>
            })
          }
          {
            emptyStarMap.map(() => {
              return <i className={'far fa-star rev_star'}></i>
            })
          }
        </div>
        <span className={'rev_rev_title'}>{props.reviewData.title}</span>
      </div>
      <span className={'rev_rev_date'}>July 7th, 2019</span>
      <span className={'rev_rev_text'}>{props.reviewData.text}</span>

    </div>
  )
}

export default Review