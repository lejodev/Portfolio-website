import React from "react";
import "./_contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">CONTACT</h1>
      <form
        className="form"
        action="https://formsubmit.co/alejandro.rv97@gmail.com"
        method="post"
      >
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
          value="EMAIL FROM PORTFOLIO"
          className="input"
          placeholder="Subject"
        />
        <input
          type="text"
          name="message"
          className="input message"
          placeholder="Message"
        />
        <input type="hidden" name="_captcha" value="false" className="input" />
        <input type="hidden" name="_template" value="table" className="input" />
        <button className="submit" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
