import React from 'react';
import ReactDOM from 'react-dom'
import ReviewSummary from './components/ReviewSummary/ReviewSummary.jsx'
import WriteReview from './components/WriteReview.jsx'

class Hello extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div id='rev_container'>
        <ReviewSummary />
        <WriteReview />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));