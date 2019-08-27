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

    this.handleSortChange = this.handleSortChange.bind(this);
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
      let newReviewsSorted = newReviews.slice().sort((a, b) => {
        return b.helpfulCount - a.helpfulCount;
      })
      this.setState({
        itemReviews: newReviewsSorted
      })
    })
  }

  sortReviewsByHelpful(){
    let newReviews = this.state.itemReviews;
    let newReviewsSorted = newReviews.slice().sort((a, b) => {
      return b.helpfulCount - a.helpfulCount;
    })
    this.setState({
      itemReviews: newReviewsSorted
    })
  }

  sortReviewsByDate() {
    let newReviews = this.state.itemReviews;
    let newReviewsSorted = newReviews.slice().sort((a, b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      return bDate - aDate;
    })
    this.setState({
      itemReviews: newReviewsSorted
    })
  }

  handleSortChange(event) {
    if(event.target.value === 'most_recent'){
      this.sortReviewsByDate();
    } else if(event.target.value === 'most_recent'){
      this.sortReviewsByHelpful();
    }

  }


  render() {
    return (
      <div id='rev_component_holder'>
        <div id='aggregate_rev_container'>
          <ReviewSummary reviewArray={this.state.itemReviews}/>
          <WriteReview />
        </div>
        <ReviewContainer reviewArray={this.state.itemReviews} handleSortChange={this.handleSortChange}/>
      </div>
    );
  }
}

ReactDOM.render(<ReviewsApp />, document.getElementById('reviewsApp'));