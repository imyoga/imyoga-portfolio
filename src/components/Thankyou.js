import React from 'react';
import message from '../images/message.png';
import BackToHome from './BackToHome';

const Thankyou = () => {
  return (
    <div className="container-thankyou">
      <img src={message} alt="message sent icon" />
      <h2>Thank you !</h2>
      <p>Sent Successfully.</p>
      <BackToHome />
    </div>
  );
};

export default Thankyou;
