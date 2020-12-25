import React from 'react';
import Note from './Note/Note';
import './NoteList.css';
import notesData from "../notesData";

export default function NoteList() {
    const notes = notesData.map(note =>
        <Note
            key={note.id}
            title={note.title}
            text={note.text}
        />
    );

    return (
        <div className="NoteList">
            <h2>All notes</h2>
            {notes}
        </div>
    );

}
