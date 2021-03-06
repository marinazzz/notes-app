import React from 'react';
import NoteCreation from '../NoteCreation/NoteCreation';
import NoteList from '../NoteList/NoteList';
import data from '../data';
import { nanoid } from 'nanoid';

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: '',
      text: '',
      data,
      isEditing: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, text } = this.state;
    const id = this.state.id + nanoid();

    const note = { id: id, title: title, text: text };
    const data = [...this.state.data, note];
    this.setState({
      data: data,
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleDelete = (id) => {
    const { data } = this.state;
    const filteredList = data.filter((item) => id !== item.id);
    this.setState({
      data: filteredList,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <main className='App-content'>
        <section className='NoteList'>
          <h2>All notes</h2>
          {data.length > 0 ? (
            <NoteList notesData={data} onDelete={this.handleDelete} />
          ) : (
            'No Notes To Show'
          )}
        </section>
        <section className='Form-wrapper'>
          <h2>New notes</h2>
          <NoteCreation
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            {...this.state}
          />
        </section>
      </main>
    );
  }
}

export default NotesContainer;
