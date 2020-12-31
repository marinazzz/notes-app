import React from 'react';
import { Input } from './Input/Input';
import { TextArea } from './TextArea/TextArea';
import { Button } from '../Button/Button';
import './Form.css';

export default function Form(props) {
    return (
        <form onSubmit={props.handleSubmit} className="Form">
            <Input
                name="input"
                type="text"
                value={props.input}
                handleChange={props.handleChange}
                id="input"
                aria-label="Add title of notes"
                aria-required="true"
            />
            <TextArea
                name="textArea"
                value={props.textArea}
                handleChange={props.handleChange}
                cols="50"
                rows="20"
                id="textArea"
                aria-label="Write some notes"
                aria-required="true"
            />
            <div className="Form-buttons">
                <Button
                    value="save"
                    className="Button"
                    aria-label="Save notes"
                />
            </div>
        </form>

    );
}
