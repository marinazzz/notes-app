import React from 'react';
import './Note.css';

export default function Note(props) {

    return (
        <li className="Note">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </li>
    );

}
