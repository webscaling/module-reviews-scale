import React from 'react';

class ComposeReview extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      stars: 4,
      title: '',
      review: '',
      starArray: [false, false, false, false, false],
      rating: 0
    }
  }

  collectTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  collectReview(event) {
    this.setState({
      review: event.target.value
    })
  }

  handleStarMouseOver(event) {
    let index = Number(event.target.id) + 1;
    let newArr = new Array(index).fill(true).concat(new Array(5 - index).fill(false));
    this.setState({
      starArray: newArr,
    })

  }

  handleStarMouseLeave() {
    if(this.state.rating === 0){
      this.setState({
        starArray: [false, false, false, false, false]
      })
    } else {
      let index = this.state.rating;
      let newArr = new Array(index).fill(true).concat(new Array(5 - index).fill(false));
      this.setState({
        starArray: newArr,
      })
    }
  }

  handleStarMouseDown(event) {
    let index = Number(event.target.id) + 1;
    let newArr = new Array(index).fill(true).concat(new Array(5 - index).fill(false));
    this.setState({
      starArray: newArr,
      rating: index
    })
  }

  render() {
    return (
      <div id='rev_compose_container'>
        <h2>Review your purchase</h2>
        <form id='rev_review_field_holder'>

          <label>Overall rating</label>
          <br />
          <div className='rev_star_container rev_rev_stars'>
            {
              this.state.starArray.map((star, index) => {

                if(!star){
                  return <i className={'far fa-star rev_agg_star rev_compose_stars'}
                          onMouseEnter={(e)=> this.handleStarMouseOver(e)}
                          onMouseLeave={()=> this.handleStarMouseLeave()}
                          id={index}></i>
                } else {
                  return <i className={'fas fa-star rev_agg_star rev_compose_stars'}
                          onMouseEnter={(e)=> this.handleStarMouseOver(e)}
                          onMouseLeave={()=> this.handleStarMouseLeave()}
                          onMouseDown={(e)=> this.handleStarMouseDown(e)}
                          id={index}></i>
                }
              })
            }
          </div>
          <br />

          <label>Add a headline</label>
          <br />
          <input onChange={(e)=> this.collectTitle(e)}></input>
          <br />

          <label>Write your review</label>
          <br />
          <textarea id='rev_review_body'
                    onChange={(e)=> this.collectReview(e)}></textarea>
          <br />

          <button id='rev_submit_review'>Submit</button>

        </form>
      </div>
    )
  }
}

export default ComposeReview
