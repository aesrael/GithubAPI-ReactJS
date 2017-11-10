import React, {Component} from 'react';

class Repo extends Component {
    constructor() {
        super();
        this.state = {
            cssColors: [
                '#9EF05C',
                '#EE6CEC',
                '#2ED9C0',
                '#F3E895',
                '#96CBFE',
                '#3273DB',
                '#EE6CEC',
                '#001f3f',
                '#0074D9',
                '#7FDBFF',
                '#39CCCC',
                '#3D9970',
                '#2ECC40',
                '#01FF70',
                '#FFDC00',
                '#FF851B',
                '#FF4136',
                '#85144b',
                '#F012BE',
                '#B10DC9',
                '#111111',
                '#AAAAA',
                '#DDDDDD',
                '#3273DB',
                '#D0021B',
                '#FFDB4A',
                '#FF2B56',
                '#247BE6',
                '#F6A617',
                '#FFDD57',
                '#DCE35B',
                '#74C44F'
            ]
        }
    }
    randomColor() {
        let colors = this.state.cssColors
        var color = colors[Math.floor(Math.random() * colors.length)]
        console.log(colors)
        return color;
    }
    render() {
        var randomColor = {
            backgroundColor: this.randomColor()
        };
        let repos = this.props.repos;
       
        if (repos) {
            repos = repos.map((repo, index) => {
                // console.log(repo)
                return (
                   // console.log()
                        <div>
                        <span className='card col-xs-12 col-sm-4 col-md-4' style ={randomColor}>
                            <span key={index}>
                            <img src={repo.owner.avatar_url} alt="" width='250' height='250'/>
                            <span className='info container'>
                                <span className='language'>
                                    <i className='fa fa-flag'>{repo.language}</i>
                                </span><br/>
                                <span className='repo'>
                                    <i className='fa fa-code'>{repo.name}</i>
                                </span>
                                <br/>
                                <span className='owner'>
                                    <a href={repo.owner.url} target='_blank' className='fa fa-external-link'>{repo.owner.url}</a>
                                </span>
                                <br/>
                                <span className='star'>
                                    <i className='fa fa-star'>{repo.watchers}</i>
                                </span><br/>
                                <span className='clone'>
                                    <i className='fa fa-clone'>{repo.clone_url}</i>
                                </span><br/>
                             </span>
                            </span>
                        </span>
                     </div>
                );
            });
        }
        return (
            <div>
             <span> Search Results for {this.props.searchTerm}</span>
            <div>{repos}</div>
            </div>
        )
    }
}

export default Repo;
