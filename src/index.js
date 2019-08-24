import React from 'react';
import ReactDOM from 'react-dom'
import ReviewSummary from './components/ReviewSummary/ReviewSummary.jsx'
import WriteReview from './components/WriteReview.jsx'
import ReviewContainer from './components/ReviewContainer/ReviewContainer.jsx'

class Hello extends React.Component {
  constructor() {
    super();

    this.state = {
      currentItem: 3333,
      writeReview: false
    }
  }


  render() {
    return (
      <div id='rev_component_holder'>
        <div id='aggregate_rev_container'>
          <ReviewSummary />
          <WriteReview />
        </div>
        <ReviewContainer />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));