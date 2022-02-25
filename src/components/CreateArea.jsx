import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({title:"", content:""}); 
 const handleChange = (e)=>{
     const {name, value} = e.target;
     setNote((preValues)=>{
         return {...preValues, [name]:value }
     })
 }
 const handleSubmit = (e)=>{
    e.preventDefault();
    setNote({title:"", content:""})
    props.addNote(note);
 }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content}  name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
