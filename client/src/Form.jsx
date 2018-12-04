import React from 'react';

const Form = (props) => (
  <div>
    <p className="intro">Inspire a lifetime of discovery and the love of learning with our academia-based resource finder for students. <br/><br/>
    Our mission is to provide a free, exciting educational resource to anyone, anywhere. Search for videos or articles based on your grade level and subject. Organize your new resources by saving them in a folder sorted by subject so you can always come back to them later! <br/><br/>
    Keep on studying, and level up!</p>
    <form onSubmit={props.onSubmitChangePage}>
      <span> Search: </span>   
      <input type="text" name="searchValue" onChange={props.onInputChange} />
        <span>   Resource: </span>   
      <select name="selectResourceType" onChange={props.onInputChange}>
        <option value="blankResource"></option>  
        <option value="video">Video</option>
        <option value="book">Book</option>
        <option value="extraPractice">Extra Practice</option>
      </select>
      <span>  Grade: </span> 
      <select name="selectGrade" onChange={props.onInputChange}>
        <option value="blankGrade"></option>
        <option value="grade6">6</option>
        <option value="grade7">7</option>
        <option value="grade8">8</option>
        <option value="grade9">9</option>
        <option value="grade10">10</option>
        <option value="grade11">11</option>
        <option value="grade12">12</option>
      </select>
        <span>  Subject: </span> 
      <select name="selectSubject" onChange={props.onInputChange}>
        <option value="blankSubject"></option>
        <option value="math">Math</option>
        <option value="languageArts">Language Arts</option>
        <option value="science">Science</option>
        <option value="socialStudies">Social Studies</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Form;