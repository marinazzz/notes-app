import React from 'react';
import { Button } from '../../Button/Button';

export const ViewTemplate = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <div className='Form-buttons'>
        <Button
          className='Button-edit'
          onClick={() => props.onChange(props.id)}
        >
          edit
        </Button>
        <Button
          className='Button-delete'
          onClick={() => props.onDelete(props.id)}
        >
          delete
        </Button>
      </div>
    </>
  );
};
