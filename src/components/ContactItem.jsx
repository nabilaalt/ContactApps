// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
// eslint-disable-next-line react/prop-types
function ContactItem({ imageUrl, name, tag, id, onDelete, onEdit }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <EditButton id={id} onEdit={onEdit} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
