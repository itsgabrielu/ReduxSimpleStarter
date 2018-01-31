// when user types something, needs to query youtube API_KEY
import React, { Component } from 'react';

// const Searchbar = () => { // functional component
//   return <input />;
// }

class Searchbar extends Component {
  constructor(props){
    super(props)

    this.state = { term: '' }
  }
  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={ event => this.setState({ term: event.target.value })} />
      </div>
    )
  }

}
export default Searchbar;
