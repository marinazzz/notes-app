import React from 'react';
import { EditingTemplate } from './EditingTemplate';
import { ViewTemplate } from './ViewTemplate';
import './Note.css';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      id: this.props.id,
      title: this.props.title,
      text: this.props.text,
    };
  }

  handleToggleTemplate = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleCancel = () => {
    const { isEditing } = this.state;
    const { id, title, text } = this.props;

    this.setState({
      isEditing: !isEditing,
      id,
      title,
      text,
    });
  };

  render() {
    return (
      <li className='Note'>
        {this.state.isEditing ? (
          <EditingTemplate
            {...this.state}
            onSave={this.handleToggleTemplate}
            onCancel={this.handleCancel}
            handleChange={this.handleChange}
          />
        ) : (
          <ViewTemplate
            {...this.props}
            {...this.state}
            onChange={this.handleToggleTemplate}
          />
        )}
      </li>
    );
  }
}
