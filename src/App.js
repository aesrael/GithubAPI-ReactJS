import React, {Component} from 'react';
import Repo from './repos';
//import Search from './search';
import './App.css';
//import '/ bootstrap / dist / css / bootstrap.min.css ';


class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: {
        items: [
          {
            "id": 86580138,
            "name": "good-datadog",
            "full_name": "guidsen/good-datadog",
            "owner": {
              "login": "guidsen",
              "id": 5262871,
              "avatar_url": "https://avatars0.githubusercontent.com/u/5262871?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/guidsen",
              "html_url": "https://github.com/guidsen",
              "followers_url": "https://api.github.com/users/guidsen/followers",
              "following_url": "https://api.github.com/users/guidsen/following{/other_user}",
              "gists_url": "https://api.github.com/users/guidsen/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/guidsen/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/guidsen/subscriptions",
              "organizations_url": "https://api.github.com/users/guidsen/orgs",
              "repos_url": "https://api.github.com/users/guidsen/repos",
              "events_url": "https://api.github.com/users/guidsen/events{/privacy}",
              "received_events_url": "https://api.github.com/users/guidsen/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/guidsen/good-datadog",
            "description": "A HapiJS good reporter for sending request metrics to Datadog",
            "fork": false,
            "url": "https://api.github.com/repos/guidsen/good-datadog",
            "forks_url": "https://api.github.com/repos/guidsen/good-datadog/forks",
            "keys_url": "https://api.github.com/repos/guidsen/good-datadog/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/guidsen/good-datadog/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/guidsen/good-datadog/teams",
            "hooks_url": "https://api.github.com/repos/guidsen/good-datadog/hooks",
            "issue_events_url": "https://api.github.com/repos/guidsen/good-datadog/issues/events{/number}",
            "events_url": "https://api.github.com/repos/guidsen/good-datadog/events",
            "assignees_url": "https://api.github.com/repos/guidsen/good-datadog/assignees{/user}",
            "branches_url": "https://api.github.com/repos/guidsen/good-datadog/branches{/branch}",
            "tags_url": "https://api.github.com/repos/guidsen/good-datadog/tags",
            "blobs_url": "https://api.github.com/repos/guidsen/good-datadog/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/guidsen/good-datadog/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/guidsen/good-datadog/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/guidsen/good-datadog/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/guidsen/good-datadog/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/guidsen/good-datadog/languages",
            "stargazers_url": "https://api.github.com/repos/guidsen/good-datadog/stargazers",
            "contributors_url": "https://api.github.com/repos/guidsen/good-datadog/contributors",
            "subscribers_url": "https://api.github.com/repos/guidsen/good-datadog/subscribers",
            "subscription_url": "https://api.github.com/repos/guidsen/good-datadog/subscription",
            "commits_url": "https://api.github.com/repos/guidsen/good-datadog/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/guidsen/good-datadog/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/guidsen/good-datadog/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/guidsen/good-datadog/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/guidsen/good-datadog/contents/{+path}",
            "compare_url": "https://api.github.com/repos/guidsen/good-datadog/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/guidsen/good-datadog/merges",
            "archive_url": "https://api.github.com/repos/guidsen/good-datadog/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/guidsen/good-datadog/downloads",
            "issues_url": "https://api.github.com/repos/guidsen/good-datadog/issues{/number}",
            "pulls_url": "https://api.github.com/repos/guidsen/good-datadog/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/guidsen/good-datadog/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/guidsen/good-datadog/notifications{?since,all,parti" +
              "cipating}",
            "labels_url": "https://api.github.com/repos/guidsen/good-datadog/labels{/name}",
            "releases_url": "https://api.github.com/repos/guidsen/good-datadog/releases{/id}",
            "deployments_url": "https://api.github.com/repos/guidsen/good-datadog/deployments",
            "created_at": "2017-03-29T12:35:57Z",
            "updated_at": "2017-08-14T03:49:53Z",
            "pushed_at": "2017-07-22T15:26:24Z",
            "git_url": "git://github.com/guidsen/good-datadog.git",
            "ssh_url": "git@github.com:guidsen/good-datadog.git",
            "clone_url": "https://github.com/guidsen/good-datadog.git",
            "svn_url": "https://github.com/guidsen/good-datadog",
            "homepage": null,
            "size": 7,
            "stargazers_count": 3,
            "watchers_count": 3,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 1,
            "forks": 0,
            "open_issues": 1,
            "watchers": 3,
            "default_branch": "master",
            "score": 8.26748
          }
        ]
      }
    }
  }

  /*componentWillMount() {
    this.setState({
      repo: {
        items: [
          {
            "id": 86580138,
            "name": "good-datadog",
            "full_name": "guidsen/good-datadog",
            "owner": {
              "login": "guidsen",
              "id": 5262871,
              "avatar_url": "https://avatars0.githubusercontent.com/u/5262871?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/guidsen",
              "html_url": "https://github.com/guidsen",
              "followers_url": "https://api.github.com/users/guidsen/followers",
              "following_url": "https://api.github.com/users/guidsen/following{/other_user}",
              "gists_url": "https://api.github.com/users/guidsen/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/guidsen/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/guidsen/subscriptions",
              "organizations_url": "https://api.github.com/users/guidsen/orgs",
              "repos_url": "https://api.github.com/users/guidsen/repos",
              "events_url": "https://api.github.com/users/guidsen/events{/privacy}",
              "received_events_url": "https://api.github.com/users/guidsen/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/guidsen/good-datadog",
            "description": "A HapiJS good reporter for sending request metrics to Datadog",
            "fork": false,
            "url": "https://api.github.com/repos/guidsen/good-datadog",
            "forks_url": "https://api.github.com/repos/guidsen/good-datadog/forks",
            "keys_url": "https://api.github.com/repos/guidsen/good-datadog/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/guidsen/good-datadog/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/guidsen/good-datadog/teams",
            "hooks_url": "https://api.github.com/repos/guidsen/good-datadog/hooks",
            "issue_events_url": "https://api.github.com/repos/guidsen/good-datadog/issues/events{/number}",
            "events_url": "https://api.github.com/repos/guidsen/good-datadog/events",
            "assignees_url": "https://api.github.com/repos/guidsen/good-datadog/assignees{/user}",
            "branches_url": "https://api.github.com/repos/guidsen/good-datadog/branches{/branch}",
            "tags_url": "https://api.github.com/repos/guidsen/good-datadog/tags",
            "blobs_url": "https://api.github.com/repos/guidsen/good-datadog/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/guidsen/good-datadog/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/guidsen/good-datadog/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/guidsen/good-datadog/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/guidsen/good-datadog/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/guidsen/good-datadog/languages",
            "stargazers_url": "https://api.github.com/repos/guidsen/good-datadog/stargazers",
            "contributors_url": "https://api.github.com/repos/guidsen/good-datadog/contributors",
            "subscribers_url": "https://api.github.com/repos/guidsen/good-datadog/subscribers",
            "subscription_url": "https://api.github.com/repos/guidsen/good-datadog/subscription",
            "commits_url": "https://api.github.com/repos/guidsen/good-datadog/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/guidsen/good-datadog/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/guidsen/good-datadog/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/guidsen/good-datadog/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/guidsen/good-datadog/contents/{+path}",
            "compare_url": "https://api.github.com/repos/guidsen/good-datadog/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/guidsen/good-datadog/merges",
            "archive_url": "https://api.github.com/repos/guidsen/good-datadog/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/guidsen/good-datadog/downloads",
            "issues_url": "https://api.github.com/repos/guidsen/good-datadog/issues{/number}",
            "pulls_url": "https://api.github.com/repos/guidsen/good-datadog/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/guidsen/good-datadog/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/guidsen/good-datadog/notifications{?since,all,parti" +
              "cipating}",
            "labels_url": "https://api.github.com/repos/guidsen/good-datadog/labels{/name}",
            "releases_url": "https://api.github.com/repos/guidsen/good-datadog/releases{/id}",
            "deployments_url": "https://api.github.com/repos/guidsen/good-datadog/deployments",
            "created_at": "2017-03-29T12:35:57Z",
            "updated_at": "2017-08-14T03:49:53Z",
            "pushed_at": "2017-07-22T15:26:24Z",
            "git_url": "git://github.com/guidsen/good-datadog.git",
            "ssh_url": "git@github.com:guidsen/good-datadog.git",
            "clone_url": "https://github.com/guidsen/good-datadog.git",
            "svn_url": "https://github.com/guidsen/good-datadog",
            "homepage": null,
            "size": 7,
            "stargazers_count": 3,
            "watchers_count": 3,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "open_issues_count": 1,
            "forks": 0,
            "open_issues": 1,
            "watchers": 3,
            "default_branch": "master",
            "score": 8.26748
          }
        ]
      }
    })
  }*/

  handleSearch(e) {
    e.preventDefault();
    var topic = this.refs.search.value
    let url = `https://api.github.com/search/repositories?q=topic:${topic}+topic:javascript&sort=stars&order=desc`
    fetch(url).then((data) => data.json()).then(json => {
      this.setState({
        repos: {
          items: json.items
        }
      })
    })
    this.refs.search.value = null
  }

  render() {

    return (
      <div className='text-center well'>
        <h1>Github Javascript Search</h1>
        <form onSubmit={this
          .handleSearch
          .bind(this)}>
          <input id='input' type='text' ref='search' placeholder='search a repo....'/>
          <input type='submit' value='Search!'/>
        </form>
        <Repo repos={this.state.repos.items}/>
      </div>
    );

  }
}

export default App;
