import React from 'react';
import ResultsList from './ResultsList.jsx';
const axios = require('axios');

const ResourcesButton = (props) => (
  <button type="button" value="savedResources" onClick={props.onClickResourcesButton}>Saved Resources</button>
);

const SearchButton = (props) => (
  <button type="button" value="searchButton" onClick={props.onClickHomeButton}>Back to Search</button>
);

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResource: []
    }
    this.saveResource = this.saveResource.bind(this);
  };

  saveResource(e, videoInfo){
    e.preventDefault();
    alert(`"${videoInfo.title}"   Saved`);
    axios.post('/savedResources', videoInfo)
    .then((result) => {
      let resources = this.state.selectedResource.concat(videoInfo);
      this.setState({
        selectedResource: resources
      })
    })
    .catch((error) => {
      console.log(error);
    });
  };

  render(){
    return (
      <div>
        <p>Results Matching</p>
        <ResultsList searchResults={this.props.searchResults} saveResource={this.saveResource} searchType={this.props.searchType} />
        <ResourcesButton onClickResourcesButton={this.props.onClickResourcesButton} />
        <SearchButton onClickHomeButton={this.props.onClickHomeButton} />
      </div>
    )
  }
}

export default Results;