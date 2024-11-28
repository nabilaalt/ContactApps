import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactInput from './ContactInput';
import { getData } from '../utils/data';
import ContactItem from './ContactItem';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
      editingContact: null, // Store the contact being edited
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onEditContactHandler = this.onEditContactHandler.bind(this);
    this.onEditContactSubmit = this.onEditContactSubmit.bind(this);
  }

  // Handler to delete contact
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
    
    // Show toast notification when a contact is deleted
    toast.success('Contact deleted successfully!');
  }

  // Handler to add new contact
  onAddContactHandler(contact) {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: +new Date(), // Unique ID based on timestamp
          imageUrl: '/images/default.jpg', // Add imageUrl property
          ...contact, // Add other properties (name, tag)
        },
      ],
    }));

    // Show toast notification when a new contact is added
    toast.success('New contact added successfully!');
  }

  // Handler to set contact for editing
  onEditContactHandler(id) {
    const contactToEdit = this.state.contacts.find(contact => contact.id === id);
    this.setState({ editingContact: contactToEdit });
  }

  // Handler to save the updated contact after editing
  onEditContactSubmit(updatedContact) {
    const contacts = this.state.contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    this.setState({
      contacts,
      editingContact: null, // Reset editingContact after saving
    });

    // Show toast notification when a contact is edited
    toast.success('Contact updated successfully!');
  }

  render() {
    return (
      <div className="contact-app">
        <h1 style={{ textAlign: "center" }}>Simple Contact App</h1>
        <ContactInput
          addContact={this.onAddContactHandler}
          editingContact={this.state.editingContact}
          editContact={this.onEditContactSubmit}
        />
        <h2>Contact List</h2>
        <div className="contact-list">
          {this.state.contacts.map(contact => (
            <ContactItem
              key={contact.id}
              {...contact}
              onDelete={this.onDeleteHandler}
              onEdit={this.onEditContactHandler}
            />
          ))}
        </div>
        <ToastContainer /> {/* Display toast notifications */}
      </div>
    );
  }
}

export default ContactApp;
