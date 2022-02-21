import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes";
const App = ()=>{
    return <div>
        <Header/>
        <Note title="t" content="c"/>
        {notes.map( (note)=>{
            return <Note key={note.key} title={note.title} content={note.content}/>
        })}
        <Footer/>
    </div>
}

export default App;
