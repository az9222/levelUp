import React from 'react';
import VideoList from './VideoList.jsx';
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
      selectedResource: {}
    }
    // this.saveResource = this.saveResource.bind(this);
  }

  // saveResource(e){
  //   e.preventDEfault();
  //   this.setState({
  //     selectedResource: e.target
  //   })
  //   axios.post('/savedResources', this.state.selectedResource)
  //   .then((selectedResource) => {
  //     this.setState({
  //       selectedResource: {}
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  render(){
    return (
      <div>
        <p>Results Matching </p>
        <VideoList searchResults={this.props.searchResults} saveResource={this.saveResource} />
        <ResourcesButton onClickResourcesButton={this.props.onClickResourcesButton} />
        <SearchButton onClickHomeButton={this.props.onClickHomeButton} />
      </div>
    )
  }
}

export default Results;