import React from 'react';
import { Input } from './Input/Input';
import { TextArea } from './TextArea/TextArea';
import { Button } from '../Button/Button';
import './Form.css';

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} className='Form'>
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
      <TextArea
        name='text'
        value={props.text}
        handleChange={props.handleChange}
        id='text'
        aria-label='Write some notes'
        aria-required='true'
        required
      />
      <div className='Form-buttons'>
        <Button value='save' className='Button' aria-label='Save notes' />
      </div>
    </form>
  );
}
