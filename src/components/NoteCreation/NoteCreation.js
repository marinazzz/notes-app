import React from 'react';
import { NoteInput } from './NoteInput/NoteInput';
import { NoteTextArea } from './NoteTextArea/NoteTextArea';
import { Button } from '../Button/Button';
import './NoteCreation.css';

export default function NoteCreation(props) {
  return (
    <form onSubmit={props.handleSubmit} className='Form'>
      <NoteInput
        name='title'
        type='text'
        value={props.title}
        handleChange={props.handleChange}
        id='title'
        aria-label='Add title of notes'
      >
        Add title
      </NoteInput>
      <NoteTextArea
        name='text'
        value={props.text}
        handleChange={props.handleChange}
        id='text'
        aria-label='Write some notes'
      >
        Add notes
      </NoteTextArea>
      <div className='Form-buttons'>
        <Button aria-label='Save notes'>save</Button>
      </div>
    </form>
  );
}
