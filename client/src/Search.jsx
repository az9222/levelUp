import React from 'react';
import Form from './Form.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {}
    }
    this.onInputChange = this.onInputChange.bind(this);
  };

  onInputChange(e){
    let newState = Object.assign({}, this.state.query); 
    newState[e.target.name] = e.target.value
    this.setState({
      query: newState,
    });
  };

  render(){
    return (
      <div>
        <img src = 'https://73v3u36iopz178i0z3a33g7d-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/elearning-banner-blog-500x250.png' className="banner" />
        <p className="title">Better Choices. Better Learning.</p>
        <Form onInputChange={this.onInputChange} 
          onSubmitChangePage={(e) => this.props.onSubmitChangePage(e, this.state.query)}/>
      </div>
    )
  }
};

export default Search;