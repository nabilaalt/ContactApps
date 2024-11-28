// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function EditButton({ id, onEdit }) {
  return (
    <button
      className="contact-item__edit"
      onClick={() => onEdit(id)}
    >
      Edit
    </button>
  );
}

export default EditButton;
