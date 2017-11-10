import React, {Component} from 'react';
import './App.css';

class Search extends Component {

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this
            .handleSubmit
            .bind(this)}>
            <input id='input' type='text' ref='search' placeholder='search a repo....' />
            <input type='submit' value='Search!'/>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;
