import React from "react";

const ContactCard = (props) => {
  const { contact } = props;
  return (
    <div className="Item" key={contact.id}>
      <div key={contact.id}>
        <h4>{contact.name}</h4>
        <p>{contact.email}</p>
      </div>
      <i className="trash alternate outline icon "></i>
      <p>
        _________________________________________________________________________
      </p>
    </div>
  );
};
export default ContactCard;
