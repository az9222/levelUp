import React from 'react';
import Search from './Search.jsx';
import Results from './Results.jsx';
import SavedResources from './SavedResources.jsx';
import TopBar from './TopBar.jsx';
import youtubeAPIKey from '../config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeResults: [],
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
      query: `${query.searchValue}, ${query.selectResourceType}, ${query.selectGrade}, ${query.selectSubject}`,
      maxResults: 25,
      type: 'video',
      videoEmbeddable: 'true'
    }
    let url = new URL('https://www.googleapis.com/youtube/v3/search');
    Object.keys(params).forEach(key=>url.searchParams.append(key, params[key]));
    fetch(url).then(
      response => response.json()
    ).then((data) => {
      console.log(data.items)
      this.setState({
        step: 'results',
        youtubeResults: data.items
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
        return <Results onClickResourcesButton={this.onClickResourcesButton} onClickHomeButton={this.onClickHomeButton} searchResults={this.state.youtubeResults} />
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