import React, {Component} from 'react';
import Repo from './repos';
import Footer from './footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: {
        items: []
      }
    }
  }
  componentWillMount() {
    this.setState({
      repo: {
        items: []
      }
    })
  }
  handleSearch(e) {
e.preventDefault();
if(!this.refs.search.value){
 alert('Enter a search term')
}
let topic= this.refs.search.value
    let url = `https://api.github.com/search/repositories?q=topic:${topic}+topic:javascript&sort=stars&order=desc`
    fetch(url).then((data) => data.json()).then(json => {
      this.setState({
        repos: {
          items: json.items
        }
      })
    })
    //this.refs.search.value = null
  }

  randomColor() {
    return this.state.repos.cssColors
  }

  render() {

    return (
      <div>
        <div className='container body'>
          <h1 className='title col-md-12 col-sm-12 col-xs-12'>
            <i className='title-github'>Github</i>
            <i className='title-search'>
              Search</i>
            <i className='title-api'>
              API</i>
          </h1>
          <form onSubmit={this
            .handleSearch
            .bind(this)}>
            <div className="wrap">
              <div className="search">
                <input
                  type="text"
                  ref='search'
                  className="searchTerm"
placeholder = "Search a repo, JavaScript first! 😉..." />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          <div className='row center-block repos'>
            <Repo repos={this.state.repos.items}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
