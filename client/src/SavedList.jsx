import React from 'react';
import Notes from './Notes.jsx';

const filterBySubject = (listOfSavedItems, subject) => {
  return listOfSavedItems.filter((resource) => {
    return resource.subjectType === subject;
  })
}

const SavedList = (props) => {
  const math = filterBySubject(props.savedItem, "math");
  const languageArts = filterBySubject(props.savedItem, "languageArts");
  const science = filterBySubject(props.savedItem, "science");
  const socialStudies = filterBySubject(props.savedItem, "socialStudies");
  const other = filterBySubject(props.savedItem, "other");
  return (
    <div>
    <div className="saved-item">
      <p className="subject">Math</p>
      {math ? math.map((item) => {
        return (
          <div className="list-item">
            <div id="list-title" style={{color: props.defaultColor}}>
            {item.info.title}
            </div>
            <br />
            {item.info.description}
            <br />
            <button className="delete-button" onClick={(e) => props.deleteResource(e, item)}>Delete</button>
            <button className="favorite-button" onClick={(e) => props.favoriteResource(e, item.info.title)}>Favorite</button>
            <Notes  notesArea={props.notesArea}/>
          </div> 
          )
        }) : "Nothing is saved!"}
    </div>
    <div className="saved-item">
      <p className="subject">Language Arts</p>
      {languageArts ? languageArts.map((item) => {
        return (
          <div className="list-item">
            <div className="list-title">
            {item.info.title}
            </div>
            <br />
            {item.info.description}
            <br />
            <button onClick={(e) => props.deleteResource(e, item)}>Delete</button>
            <button onClick={(e) => props.favoriteResource(e, item.info.title)}>Favorite</button>
            <Notes  notesArea={props.notesArea}/>
          </div> 
          )
        }) : "Nothing is saved!"}
    </div>
    <div className="saved-item">
    <p className="subject">Science</p>
    {science ? science.map((item) => {
      return (
        <div className="list-item">
          <div className="list-title">
          {item.info.title}
          </div>
          <br />
          {item.info.description}
          <br />
          <button onClick={(e) => props.deleteResource(e, item)}>Delete</button>
          <button onClick={(e) => props.favoriteResource(e, item.info.title)}>Favorite</button>
          <Notes  notesArea={props.notesArea}/>
        </div> 
        )
      }) : "Nothing is saved!"}
    </div>
    <div className="saved-item">
    <p className="subject">Social Studies</p>
    {socialStudies ? socialStudies.map((item) => {
      return (
        <div className="list-item">
          <div className="list-title">
          {item.info.title}
          </div>
          <br />
          {item.info.description}
          <br />
          <button onClick={(e) => props.deleteResource(e, item)}>Delete</button>
          <button onClick={(e) => props.favoriteResource(e, item.info.title)}>Favorite</button>
          <Notes  notesArea={props.notesArea}/>
        </div> 
        )
      }) : "Nothing is saved!"}
  </div>
  <div className="saved-item">
  <p className="subject">Other</p>
  {other ? other.map((item) => {
    return (
      <div className="list-item">
        <div className="list-title">
        {item.info.title}
        </div>
        <br />
        {item.info.description}
        <br />
        <button onClick={(e) => props.deleteResource(e, item)}>Delete</button>
        <button onClick={(e) => props.favoriteResource(e, item.info.title)}>Favorite</button>
        <Notes  notesArea={props.notesArea}/>
      </div> 
      )
    }) : "Nothing is saved!"}
</div>
</div>
  )
};

export default SavedList;