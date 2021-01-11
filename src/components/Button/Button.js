import React from 'react';
import './Button.css';

export const Button = ({ children, ...otherProps }) => (
  <button className='Button' {...otherProps}>
    {children}
  </button>
);
