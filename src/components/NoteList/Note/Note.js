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

  handleToggle = () => {
    const { isEditing, id, title, text } = this.state;
    this.setState({
      isEditing: !isEditing,
      id: id,
      title: title,
      text: text,
    });
  };

  handleSave = () => {
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
