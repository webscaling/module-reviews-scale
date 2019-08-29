import React from 'react';

class ComposeReview extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      stars: 4,
      title: '',
      review: ''
    }
  }

  render() {
    return (
      <div id='rev_compose_container'>
        <h2>Review your purchase</h2>
        <form id='rev_review_field_holder'>

          <label>Overall rating</label>
          <br />
          <input></input>
          <br />

          <label>Add a headline</label>
          <br />
          <input></input>
          <br />

          <label>Write your review</label>
          <br />
          <textarea id='rev_review_body'></textarea>
          <br />

        </form>
      </div>
    )
  }
}

export default ComposeReview
