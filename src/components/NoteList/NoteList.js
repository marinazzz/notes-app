import React from 'react';
import Note from './Note/Note';
import './NoteList.css';

export default function NoteList(props) {
    const notesData = props.notesData;
    const notes = notesData.map((note, index) =>
        <Note key={index}
            {...note}
        />
    );

    return (
        <ul>
            {notes}
        </ul>
    );

}
