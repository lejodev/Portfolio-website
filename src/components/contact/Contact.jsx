import React from "react";
import "./_contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfgbhez",
        "template_j1cwa3f",
        e.target,
        "user_fhFkAb44WG1pMgD5at18A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">CONTACT</h1>
      <form className="form" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          className="input name"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          className="input email"
          placeholder="Email"
        />
        <input
          type="hidden"
          name="_subject"
          className="input"
          placeholder="Subject"
        />
        <input
          type="text"
          name="message"
          className="input message"
          placeholder="Message"
        />
        <button className="input submit" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
