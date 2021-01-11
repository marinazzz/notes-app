import React from 'react';
import { EditingTemplate } from './EditingTemplate';
import { ViewTemplate } from './ViewTemplate';
import './Note.css';

export default class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };
  }

  handleToggle = () => {
    this.setState((state, props) => ({
      isEditing: !state.isEditing,
      id: props.id,
      title: props.title,
      text: props.text,
    }));
  };

  handleSave = () => {
    this.setState({
      isEditing: !this.state.isEditing,
      title: this.state.title,
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <li className='Note'>
        {this.state.isEditing ? (
          <EditingTemplate
            {...this.state}
            onSave={this.handleSave}
            onCancel={this.handleToggle}
            handleChange={this.handleChange}
          />
        ) : (
          <ViewTemplate
            {...this.props}
            {...this.state}
            onChange={this.handleToggle}
          />
        )}
      </li>
    );
  }
}
