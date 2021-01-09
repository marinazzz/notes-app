import React from 'react';
import './Button.css';

export const Button = props =>
    <button className={props.className}>
        {props.value} 
    </button>
