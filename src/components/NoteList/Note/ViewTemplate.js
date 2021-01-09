import React from 'react';

export const ViewTemplate = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <div className='Form-buttons'>
        <button
          className='Button-edit'
          onClick={() => props.onChange(props.id)}
        >
          edit
        </button>
        <button
          className='Button-delete'
          onClick={() => props.onDelete(props.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};
