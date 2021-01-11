import React from 'react';
import './NoteInput.css';

export const NoteInput = ({ handleChange, children, ...otherProps }) => (
  <>
    <label htmlFor='input'>{children}</label>
    <input
      className='Input'
      aria-required='true'
      required
      onChange={handleChange}
      {...otherProps}
    ></input>
  </>
);
