import { Button } from '../../Button/Button';

export const ViewTemplate = ({ title, text, id, ...props }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className='Form-buttons'>
        <Button className='Button-edit' onClick={() => props.onChange(id)}>
          edit
        </Button>
        <Button className='Button-delete' onClick={() => props.onDelete(id)}>
          delete
        </Button>
      </div>
    </>
  );
};
