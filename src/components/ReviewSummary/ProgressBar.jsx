import React from 'react';

const ProgressBar = (props) => {
  return(
    <div className={'rev_progress_bar'}>
      <Filler />
    </div>
  )
}

const Filler = (props) => {
  return(
    <div className={'rev_filler'} style={{width: `60%`}}>
      
    </div>
  )
}

export default ProgressBar;