import React, { useState } from "react";

import emailjs, { init } from 'emailjs-com';

const userId = process.env.REACT_APP_FORM_USER_ID;
init(userId);
const serviceId = process.env.REACT_APP_FORM_SERVICE_ID;
const templateId = process.env.REACT_APP_FORM_KEY;

function Form() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send(serviceId, templateId, {
      name,
      message,
      reply_to: email,
      tel
    })
      .then(() => {
        setName('');
        setTel('');
        setEmail('');
        setMessage('');
      }, () => {
        // eslint-disable-next-line no-alert
        alert("Erreur de l'envoi du message");
      });
  };

  const handleChange = (event) => {
    if (event.target.name === "setName") {
      setName(event.target.value);
    } if (event.target.name === "setTel") {
      setTel(event.target.value);
    } if (event.target.name === "setEmail") {
      setEmail(event.target.value);
    } if (event.target.name === "setMessage") {
      setMessage(event.target.value);
    }
  };


  return (
    <div className="center">
      <form action="" className="form center" onSubmit={handleSubmit}>
        <input className="form-text" name="setName" type="text" placeholder="Nom" value={name} onChange={handleChange} />
        <input className="form-text" name="setEmail" type="text" placeholder="Email" value={email} onChange={handleChange} />
        <input className="form-text" name="setTel" type="text" placeholder="Telephone" value={tel} onChange={handleChange} />
        <textarea className="form-text-area" rows="7" name="setMessage" placeholder="Votre message ici" value={message} onChange={handleChange} />
        <input type="submit" value="Envoye" />
      </form>
    </div>
  );
}

export default Form;
