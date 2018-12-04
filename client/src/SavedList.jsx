import React from 'react';

const SavedList = (props) => (
  <div className="saved-item">
   {props.savedItem ? props.savedItem.map((item) => {
     return (
    <div className="list-item">
      <div className="list-title">
      {item.title}
      </div>
      <br />
      {item.description}
      <br />
      <button onClick={(e) => props.deleteResource(e, item)}>Delete</button>
    </div> 
     )
   }) : "Nothing is saved!"}
  </div>
);

export default SavedList;