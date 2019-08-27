import React from 'react';

const Review = (props) => {
  const starMap = new Array(props.reviewData.rating).fill('*')
  const emptyStarMap = new Array(5 - props.reviewData.rating).fill('*')

  //Date
  const options = { year: 'numeric', month: 'long', day: 'numeric'};
  const displayDate = new Date(props.reviewData.date).toLocaleDateString('en-US', options)

  return(
    <div id='rev_review'>
      <div className={'rev_pic_title'}>
        <img className={'rev_avatar'} src={props.reviewData.avatarURL} />
        <span className={'rev_author'}>{props.reviewData.author}</span>
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
      <span className={'rev_rev_date'}>{displayDate}</span>
      <span className={'rev_rev_text'}>{props.reviewData.text}</span>
      <span className={'rev_rev_helpfulCount'}>{`${props.reviewData.helpfulCount} people found this helpful`}</span>

    </div>
  )
}

export default Review