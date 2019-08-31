import React from 'react';
import ReactDOM from 'react-dom'
import ReviewSummary from './components/ReviewSummary/ReviewSummary.jsx'
import WriteReviewButton from './components/WriteReviewButton.jsx'
import ReviewContainer from './components/ReviewContainer/ReviewContainer.jsx'
import axios from 'axios';
import ComposeReview from './components/ComposeReview.jsx';

class ReviewsApp extends React.Component {
  constructor() {
    super();

    this.state = {
      currentItem: 13, //Math.floor((Math.random() * 100) + 1),
      writeReview: false,
      itemReviews: [],
      listOrder: ['Top Reviews', 'Most Recent']
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
    if(event.target.value === 'Most Recent'){
      this.sortReviewsByDate();
    } else if(event.target.value === 'Top Reviews'){
      this.sortReviewsByHelpful();
    }
  }

  renderCompose(cancel){
    this.setState({
      writeReview: !this.state.writeReview
    }, ()=> {
      if (cancel === undefined) {
        this.componentDidMount();
        setTimeout(function() {
          this.sortReviewsByDate();
        }.bind(this), 200)
        this.setState({
          listOrder: ['Most Recent', 'Top Reviews']
        })
      }
    })
  }


  render() {
    return (
      <div id='rev_component_holder'>
        <div id='aggregate_rev_container'>
          <ReviewSummary reviewArray={this.state.itemReviews}/>
          { this.state.writeReview ? null : <WriteReviewButton 
            renderCompose={this.renderCompose.bind(this)}/> }
        </div>
        {
          this.state.writeReview ? 
          <ComposeReview 
            currentItem={this.state.currentItem}
            flipToReviews={this.renderCompose.bind(this)}/> 
            : 
          <ReviewContainer 
            listOrder={this.state.listOrder}
            reviewArray={this.state.itemReviews} 
            handleSortChange={this.handleSortChange}/>
        }
      </div>
    );
  }
}

ReactDOM.render(<ReviewsApp />, document.getElementById('reviewsApp'));