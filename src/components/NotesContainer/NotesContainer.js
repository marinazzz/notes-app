import React from 'react';
import Form from '../Form/Form';
import NoteList from '../NoteList/NoteList';
import data from "../data";

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            textArea: '',
            data
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const title = this.state.input;
        const text = this.state.textArea;
        const info = { title: title, text: text };
        const data = [...this.state.data, info];
        this.setState({
            data: data
        });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main className="App-content">
                <div className="NoteList">
                    <h2>All notes</h2>
                    <NoteList notesData={this.state.data} />
                </div>
                <div className="Form-wrapper">
                    <h2>New notes</h2>
                    <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}
                        {...this.state} />
                </div>
            </main>
        );
    }
}

export default NotesContainer;