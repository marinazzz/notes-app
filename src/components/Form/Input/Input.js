import React from 'react';
import './Input.css';

export const Input = ({ handleChange, ...otherProps }) => (
    <React.Fragment>
        <label htmlFor="input">Add title</label>
        <input
            className="Input"
            onChange={handleChange}
            {...otherProps}
        >
        </input>
    </React.Fragment>
);
