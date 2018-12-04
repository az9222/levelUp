import React from 'react';

const NotesForm =  (props) => (
  <div className="notesForum">
    <br />
    <div>
      <span>Note: </span>
      {props.notesArea}
    </div>
    <br />
    <form onSubmit={props.onNotesSubmit}>
    <input type="text" name="savedNotes" onChange={props.onTextChange} />
    <input type="submit" value="Submit Notes" />
    </form>
  </div>
)

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {},
      notesArea: ''
    }
    this.onTextChange = this.onTextChange.bind(this);
    this.onNotesSubmit = this.onNotesSubmit.bind(this);
  };

  onTextChange(e) {
    let newState = Object.assign({}, this.state.notes);
    newState[e.target.name] = e.target.value;
    this.setState({
      notes: newState
    })
  };

  onNotesSubmit(e) {
    e.preventDefault();
    this.setState({
      notesArea: e.target.value
    })
  };

  render() {
    return (
      <div>
        <NotesForm onTextChange={this.onTextChange} notesArea={this.state.notesArea} onNotesSubmit={this.onNotesSubmit} />
      </div>
    )
  }
};

export default Notes;