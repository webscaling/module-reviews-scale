import React from 'react';
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div id='rev_container'>helo</div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));