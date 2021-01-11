import React from 'react';
import { Button } from '../../Button/Button';
import { NoteInput } from '../../NoteCreation/NoteInput/NoteInput';
import { NoteTextArea } from '../../NoteCreation/NoteTextArea/NoteTextArea';

export const EditingTemplate = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='Form'>
      <NoteInput
        className='Input Input-edit'
        name='title'
        type='text'
        value={props.title}
        handleChange={props.handleChange}
        id='title'
        aria-label='Change title of notes'
        aria-required='true'
        required
      >
        CHANGE TITLE
      </NoteInput>
      <NoteTextArea
        className='Text-area Text-area-edit'
        name='text'
        value={props.text}
        handleChange={props.handleChange}
        id='text'
        aria-label='Edit notes'
      >
        CHANGE NOTES
      </NoteTextArea>
      <div className='Form-buttons'>
        <Button
          type='button'
          className='Button-edit'
          onClick={() => props.onCancel(props.id)}
        >
          cancel
        </Button>
        <Button
          type='submit'
          className='Button Button-save'
          onClick={() => props.onSave(props.id)}
        >
          save
        </Button>
      </div>
    </form>
  );
};
