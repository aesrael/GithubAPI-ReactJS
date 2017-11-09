import React, {Component} from 'react';
import './App.css';

class Search extends Component {

handleSubmit(e) {
  e.preventdefault();
  let url = `https://api.github.com/search/repositories?q=topic:${topic}+topic:javascript&sort=stars&order=desc`
  fetch(url).then(function (data) {
    return data.json
  }).then(json => {
      this.setState({repo: json})
    })
this.refs.newitem.value = null
}

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
