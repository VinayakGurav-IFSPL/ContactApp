import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const renderContactsList = props.contact.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });

  return <div className="ui celled list">{renderContactsList}</div>;
};

export default ContactList;
