import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";
const App = ()=>{
    const [notes, setNotes] = useState([]);
    const addNote = (note)=>{
        setNotes((preValues)=>{
            return [...preValues, note];
        })
    }
    const deleteNote = (id)=>{
        setNotes((preValues)=>{
            return preValues.filter((note, index)=> index!==id);
        })
    }
    return <div>
        <Header/>
        <CreateArea addNote={addNote}/>
        
        {notes.map((note, index)=>{
            return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
        })}
        
        <Footer/>
    </div>
}

export default App;
