import React from 'react';
import Note from './Note/Note';
import './NoteList.css';

export default function NoteList(props) {
  const notesData = props.notesData;
  const notes = notesData.map((note) => (
    <Note key={note.id} {...note} onDelete={props.onDelete} />
  ));

  return <ul>{notes}</ul>;
}
