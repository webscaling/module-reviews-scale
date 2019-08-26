import React from 'react';
import ReactDOM from 'react-dom'
import ReviewSummary from './components/ReviewSummary/ReviewSummary.jsx'
import WriteReview from './components/WriteReview.jsx'
import ReviewContainer from './components/ReviewContainer/ReviewContainer.jsx'
import axios from 'axios';

class ReviewsApp extends React.Component {
  constructor() {
    super();

    this.state = {
      currentItem: Math.floor((Math.random() * 100) + 1),
      writeReview: false,
      itemReviews: []
    }
  }

  componentDidMount() {
    this.getReviewsForItem(this.state.currentItem)
  }

  getReviewsForItem(queryItemID) {
    axios.get('/itemReviews', {
      params: {
        itemID: queryItemID
      }
    })
    .then((response) => {
      let newReviews = response.data;
      this.setState({
        itemReviews: newReviews
      })
    })
  }


  render() {
    return (
      <div id='rev_component_holder'>
        <div id='aggregate_rev_container'>
          <ReviewSummary reviewArray={this.state.itemReviews}/>
          <WriteReview />
        </div>
        <ReviewContainer reviewArray={this.state.itemReviews}/>
      </div>
    );
  }
}

ReactDOM.render(<ReviewsApp />, document.getElementById('reviewsApp'));