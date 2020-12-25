import React from 'react';
import './Note.css';

export default function Note(props) {

    return (
        <div className="Note">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );

}
