import React from 'react';
import './TextArea.css';

export const TextArea = ({ handleChange, ...otherProps }) => (
    <React.Fragment>
        <label htmlFor="textArea">Add notes</label>
        <textarea
            className="Text-area"
            onChange={handleChange}
            {...otherProps}>
        </textarea>
    </React.Fragment>
);