import React from 'react';
import './NoteTextArea.css';

export const NoteTextArea = ({ handleChange, children, ...otherProps }) => (
  <>
    <label htmlFor='textArea'>{children}</label>
    <textarea
      className='Text-area'
      onChange={handleChange}
      aria-required='true'
      required
      {...otherProps}
    ></textarea>
  </>
);
