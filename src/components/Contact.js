import React from 'react';
import { ReactComponent as ImportedAvatar } from '../images/avatar.svg';
import './Contact.css';

const Form = (props) => {
  return (
    <div id={props.id} className="container-contact">
      <div className="avatar-contact-me">
        <ImportedAvatar />
      </div>
      <div className="hr"></div>

      <p className="thanks-note">Thank you for taking the time to review my portfolio.</p>
      <h2 className="contact-me">Contact Me</h2>

      <form action="https://formsubmit.co/moradiyayogeshg@gmail.com" method="POST">
        <div className="container-name-email">
          <div className="container-name">
          <label>
          Name<span>*</span>
        </label>
            <input type="text" name="name" required />
          </div>

          <div className="container-email">
            <label>
              Email<span>*</span>
            </label>
            <input type="email" name="email" required />
          </div>
        </div>

        <div className="container-message">
          <label>
            Message<span>*</span>
          </label>
          <textarea type="text" name="name" rows="5" cols="30" required />
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://imyoga.net/thankyou" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
