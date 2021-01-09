import React from 'react';
import { Input } from '../../Form/Input/Input';
import { TextArea } from '../../Form/TextArea/TextArea';

export const EditingTemplate = (props) => {
  return (
    <form className='Form'>
      <div className='Form-group'>
        <Input
          name='title'
          type='text'
          value={props.title}
          handleChange={props.handleChange}
          id='title'
          aria-label='Add title of notes'
          aria-required='true'
          required
        />
      </div>
      <div className='Form-group'>
        <TextArea
          className='Text-area-edit'
          name='text'
          value={props.text}
          handleChange={props.handleChange}
          id='text'
          aria-label='Write some notes'
          aria-required='true'
          required
        />
      </div>
      <div className='Form-buttons'>
        <button
          type='button'
          className='Button-edit'
          onClick={() => props.onCancel(props.id)}
        >
          Cancel
        </button>
        <button
          type='submit'
          className='Button-save'
          onClick={() => props.onSave(props.id)}
        >
          Save
        </button>
      </div>
    </form>
  );
};
