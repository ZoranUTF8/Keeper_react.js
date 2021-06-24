import notes from "../notes";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


function App() {
    return (
        <div>
        
        <Header />
        <div>
        {notes.map(note => 
            <Note 
            key = {note.key}
            noteId = {note.key}
            noteTitle = {note.title}
            noteText = {note.content}
        /> )} 
        </div>
        <Footer />
         
        </div>

    );
}
export default App;
