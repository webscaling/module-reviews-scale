import React from 'react';

const ProgressBar = (props) => {
  return(
    <div className={'rev_progress_bar'}>
      <Filler percentage={props.percentage}/>
    </div>
  )
}

const Filler = (props) => {
  return(
    <div className={'rev_filler'} style={{width: `${props.percentage}%`}}>
      
    </div>
  )
}

export default ProgressBar;