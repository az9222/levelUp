import React from 'react';
import SavedResources from './SavedResources.jsx';

const ResourcesButton = (props) => (
  <button type="button" value="savedResources" onClick={props.onClickResourcesButton}>Saved Resources</button>
);

const SearchButton = (props) => (
  <button type="button" value="searchButton" onClick={props.onClickHomeButton}>Back to Search</button>
)


class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <p>Results</p>
        <ResourcesButton onClickResourcesButton={this.props.onClickResourcesButton} />
        <SearchButton onClickHomeButton={this.props.onClickHomeButton} />
      </div>
    )
  }
}

export default Results;