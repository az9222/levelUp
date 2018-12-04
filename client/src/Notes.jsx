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
      notesArea: newState
    })
  };

  onNotesSubmit(e, text) {
    e.preventDefault();
    axios.post('/savedResources', text.savedNotes)
    .then((result) => {
      this.setState({
        notesArea: result
      })
    })
    .catch((error) => {
      console.log(error);
    })
  };

  render() {
    return (
      <div>
        <NotesForm onTextChange={this.onTextChange} notesArea={this.state.notesArea}/>
      </div>
    )
  }
};

export default Notes;