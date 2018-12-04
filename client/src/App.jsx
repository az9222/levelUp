import React from 'react';
import Search from './Search.jsx';
import Results from './Results.jsx';
import SavedResources from './SavedResources.jsx';
import TopBar from './TopBar.jsx';
import {youtubeAPIKey, khanKey} from '../config.js';
import khan from 'khan';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      step: 'search'
    }
    this.onSubmitChangePage = this.onSubmitChangePage.bind(this);
    this.onClickResourcesButton = this.onClickResourcesButton.bind(this);
    this.onClickHomeButton = this.onClickHomeButton.bind(this);
  }

  onSubmitChangePage(e, query) {
    e.preventDefault();
    let params = {
      part: 'snippet',
      key: youtubeAPIKey,
      q: `${query.searchValue}, ${query.selectResourceType}, ${query.selectGrade}, ${query.selectSubject}`,
      maxResults: 25,
      type: 'video',
      videoEmbeddable: 'true',
      topicId: '/m/01k8wb' //knowledge only
    }
    let url = new URL('https://www.googleapis.com/youtube/v3/search');
    Object.keys(params).forEach(key=>url.searchParams.append(key, params[key]));
    fetch(url).then(
      response => response.json()
    ).then((data) => {
      let options = this.state.searchResults.concat(data.items)
      this.setState({
        step: 'results',
        searchResults: options
      })}
    ).catch((error)=>console.log(error));
  };

  onClickResourcesButton(e) {
    e.preventDefault();
    this.setState({
      step: 'savedResources'
    });
  };

  onClickHomeButton(e) {
    e.preventDefault();
    this.setState({
      step: 'search'
    });
  };

  renderSteps() {
    switch(this.state.step) {
      case 'search':
        return <Search onSubmitChangePage={this.onSubmitChangePage} />
      case 'results':
      console.log(this.state.searchResults)
        return <Results onClickResourcesButton={this.onClickResourcesButton} onClickHomeButton={this.onClickHomeButton} searchResults={this.state.searchResults} />
      case 'savedResources':
        return <SavedResources onClickHomeButton={this.onClickHomeButton} />
      default:
        return <Search />
    }
  }

  render() {
    return (
      <div>
        <TopBar />
        {this.renderSteps()}
      </div>
    )
  }
};


export default App;