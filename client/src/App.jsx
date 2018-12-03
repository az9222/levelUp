import React from 'react';
import Search from './Search.jsx';
import Results from './Results.jsx';
import SavedResources from './SavedResources.jsx';
import TopBar from './TopBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 'search'
    }
    this.onSubmitChangePage = this.onSubmitChangePage.bind(this);
    this.onClickResourcesButton = this.onClickResourcesButton.bind(this);
    this.onClickHomeButton = this.onClickHomeButton.bind(this);
  }

  onSubmitChangePage(e) {
    e.preventDefault();
    this.setState({
      step: 'results'
    });
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
        return <Results onClickResourcesButton={this.onClickResourcesButton} onClickHomeButton={this.onClickHomeButton} />
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