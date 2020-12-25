import React from 'react';
import { Input } from './Input/Input';
import { TextArea } from './TextArea/TextArea';
import { Button } from '../Button/Button';
import './Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            textArea: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ input: '', textArea: '' });
    }

    // handleChange = event => {
    //     this.setState({ value: event.target.value });
    // }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="Form-wrapper">
                <h2>New notes</h2>
                <form onSubmit={this.handleSubmit} className="Form">
                    <Input
                        name="input"
                        type="text"
                        value={this.state.input}
                        handleChange={this.handleChange}
                        id="input"
                    />
                    <TextArea
                        name="textArea"
                        value={this.state.textArea}
                        handleChange={this.handleChange}
                        cols="50"
                        rows="20"
                        id="textArea"
                    />
                    <div className="Form-buttons">
                        <Button
                            value="save"
                            className="Button"
                        />
                        <Button
                            value="delete"
                            className="Button-delete"
                        />
                    </div>
                </form>
            </div>
        );
    }
}