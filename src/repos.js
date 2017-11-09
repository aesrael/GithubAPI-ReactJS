import React, {Component} from 'react';

class Repo extends Component {

    render() {
        let repos = this.props.repos;
        if (repos) {
            repos = repos.map((repo, index) => {
                return (
                    <span key={index}>
                        <span>{repo.name}</span>
                        <img src={repo.owner.avatar_url} alt={repo.name} width='300' height='300' />
                        <a href={repo.owner.url}></a>
                        <span>{repo.clone_url}</span>
                        <span>{repo.language}</span>
                        <span>{repo.watchers}</span>
                    </span>
                );
            });
        }
        return (
            <div>{repos}</div>
        )
    }
}

export default Repo;
