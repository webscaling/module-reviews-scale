import React from 'react';
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>hellllllllllllo</div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));