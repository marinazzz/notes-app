import React from 'react';

function NotesComponent(props) {
    return (
        <ul>
            <li className="Note">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </li>
        </ul>
    );
}

export default NotesComponent;