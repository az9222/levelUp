import React from 'react';

const ResourcesButton = (props) => (
  <button type="button" value="savedResources" onClick={props.onClickResourcesButton}>Saved Resources</button>
);

const SearchButton = (props) => (
  <button type="button" value="searchButton" onClick={props.onClickHomeButton}>Back to Search</button>
);

const ResultsList = (props) => (
  <div className="resultsList">
    <ul>
      {props.searchResults.map((result) => {
        return (
        <li className="single-result">
          {result.snippet.title}
        </li>
        )
      })}
    </ul>
  </div>
);

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <p>Results</p>
        <ResultsList searchResults={this.props.searchResults}/>
        <ResourcesButton onClickResourcesButton={this.props.onClickResourcesButton} />
        <SearchButton onClickHomeButton={this.props.onClickHomeButton} />
      </div>
    )
  }
}

export default Results;