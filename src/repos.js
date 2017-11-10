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
                return (
                        <div class='center-block'>
                        <span className='col-xs-12 col-sm-6 col-md-4' >
                            <div className='card' style ={randomColor}>
                            <span key={index}>
                                  <span className='repo'>
                                   <h1 className='fa fa-pencil'>{repo.name}</h1>
                                </span>
                                <br/>
                            <img src={repo.owner.avatar_url} class='center-block' alt="" width='300' height='300'/>
                            <span className='info container'>
                                <span className='language'>
                                    <i className='fa fa-flag'>{repo.language}</i>
                                </span><br/>
                              
                                <span className='link'>
                                    <a href={repo.html_url} target='_blank' className='fa fa-external-link link'>{repo.html_url} </a>
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
                            </div>
                        </span>
                     </div>
                );
            });
        }
        return (
            <div>
            <div>{repos}</div>
            </div>
        )
    }
}

export default Repo;
