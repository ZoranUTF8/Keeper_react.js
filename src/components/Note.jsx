import React from "react";

function Note(props) {
    return (
        <div className="note">
        <h1>{props.noteTitle}</h1>
        <p>{props.noteText}</p>
        <p>Note-id: {props.noteId}</p>
        </div>
    )
};

export default Note;