import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <h1 className="contact"> CONTACT US </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0058473989443!2d76.72164916489415!3d28.659543582407167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d7151beb93713%3A0xd65201a4db9a9d19!2sKheri%20Asra%2C%20Haryana%20124104!5e0!3m2!1sen!2sin!4v1661446400789!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <br></br>
      <div className="container">
        <form action="https://formspree.io/f/mrgdblrp" method="POST">
          <label for="name">
            <b>Username</b>
          </label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            autoComplete="off"
            required
          />
          <br></br>
          <label for="email">
            <b>Email</b>
          </label>
          <br></br>
          <input
            type="email"
            placeholder="Enter Email.Id"
            name="uname"
            autoComplete="off"
            required
          />
          <br></br>
          <label for="message">
            <b>Enter your message-</b>
          </label>
          <br></br>
          <textarea
            type="text"
            name="message"
            autoComplete="off"
            required
            rows="6"
            cols="30"
          ></textarea>
          <br></br>
          <input type="submit" value="send" className="btn"></input>
        </form>
      </div>
    </>
  );
};
export default Contact;
// https://formspree.io/f/mrgdblrp
