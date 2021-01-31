import { NoteInput } from './NoteInput/NoteInput';
import { NoteTextArea } from './NoteTextArea/NoteTextArea';
import { Button } from '../Button/Button';
import './NoteCreation.css';

const NoteCreation = ({ handleSubmit, handleChange, title, text }) => {
  return (
    <form onSubmit={handleSubmit} className='Form'>
      <NoteInput
        name='title'
        type='text'
        value={title}
        handleChange={handleChange}
        id='title'
        aria-label='Add title of notes'
      >
        Add title
      </NoteInput>
      <NoteTextArea
        name='text'
        value={text}
        handleChange={handleChange}
        id='text'
        aria-label='Write some notes'
      >
        Add notes
      </NoteTextArea>
      <div className='Form-buttons'>
        <Button aria-label='Save notes'>save</Button>
      </div>
    </form>
  );
};

export default NoteCreation;
