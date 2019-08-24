import React from 'react';

const Review = (props) => {
  return(
    <div id='rev_review'>
      <div className={'rev_pic_title'}>
        <img className={'rev_avatar'} src='https://i.imgflip.com/29s5ao.jpg' />
        <span className={'rev_author'}>Elmo Street</span>
      </div>
      <div className={'rev_rev_rating_stars'}>
        <div className={'rev_rev_stars'}>*****</div>
        <span className={'rev_rev_title'}>It's pronounced levio-SAH</span>
      </div>
      <span className={'rev_rev_date'}>July 7th, 2019</span>
      <span>
        Toad-like smile Flourish and Blotts he knew I’d come back 
        Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 
        inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast 
        Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing 
        above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix 
        tears good clean match.
      </span>

    </div>
  )
}

export default Review