import React from 'react';

const Form = () => {
    return (
        <div id="Contact" className='container-contact'>
            <p>Thank you for reviewing my portfolio.</p>
            <h2>Contact Me</h2>


            <form action="https://formsubmit.co/moradiyayogeshg@gmail.com" method="POST">
                <lable>
                    Name<span>*</span>
                </lable>
                <input type="text" name="name" required />
                <label>
                    Email<span>*</span>
                </label>
                <input type="email" name="email" required />
                <lable>
                    Message<span>*</span>
                </lable>
                <textarea type="text" name="name" rows="5" cols="30" required />

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://imyoga.net/thankyou" />

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Form;
