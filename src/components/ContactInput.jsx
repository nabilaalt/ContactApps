/* eslint-disable react/prop-types */
import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  // Handle name change
  onNameChangeEventHandler(event) {
    this.setState(() => ({
      name: event.target.value,
    }));
  }

  // Handle tag change
  onTagChangeEventHandler(event) {
    this.setState(() => ({
      tag: event.target.value,
    }));
  }

  // Handle form submission
  onSubmitEventHandler(event) {
    event.preventDefault();
    // If editing an existing contact, pass the contact ID as well
    const { name, tag } = this.state;
    const { editingContact, addContact, editContact } = this.props;

    if (!name.trim() || !tag.trim()) {
        alert('Nama dan tag tidak boleh kosong!');
        return;
      }
      

    if (editingContact) {
      // Update the contact if editing
      editContact({ ...editingContact, name, tag });
    } else {
      // Add new contact if no editing
      addContact({ name, tag });
    }

    // Clear the form after submission
    this.setState({ name: '', tag: '' });
  }

  // Set the form's input values based on the editingContact prop (if editing)
  componentDidUpdate(prevProps) {
    if (this.props.editingContact && this.props.editingContact !== prevProps.editingContact) {
      const { name, tag } = this.props.editingContact;
      this.setState({ name, tag });
    }
  }

  render() {
    const { name, tag } = this.state;
    const { editingContact } = this.props;


    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={this.onNameChangeEventHandler}
        />
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={this.onTagChangeEventHandler}
        />
        <button type="submit">{editingContact ? 'Save Changes' : 'Add New'}</button>
      </form>
    );
   
  }
}

export default ContactInput;
