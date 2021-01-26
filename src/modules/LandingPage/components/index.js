import React, { useState, useEffect } from 'react';
import Footer from '../../../components/footer';
import * as api from '../../../api/support';
import Particles from './particles/index';

const LandingPage = () => {
  const [contactData, setContactData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChangeField = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const validForm = () => {
    const res = Object.keys(contactData).filter(
      (item) => contactData[item].length > 0
    );

    return res.length === 3;
  };

  const sendEmail = async () => {
    try {
      if (validForm()) {
        await api.sendEmail(contactData);
        setErrors(['']);
        setContactData({
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setErrors(['Every field is mandatory!']);
      }
    } catch (error) {
      setErrors(['Error sending the email']);
    }
  };

  return (
    <div className='page-container landing-container'>
      <div className='landing-content' name='top'>
        <Particles className='particles' />
        <div className='platform-link'>
          <a href='https://cloud.apiodigital.com' target='blank'>
            Login
          </a>
        </div>
        <div className='information'>
          <div className='logo-container'>
            <img
              id='front-logo'
              alt='Apio Logo'
              src='/images/apio-logo-transparent-fit-white.png'
            />
            <img id='hooks' alt='Hooks' src='/images/hooks.png' />
          </div>
          <p className='description'>Simulating Living Experiences</p>
          <p className='informer'>
            The website is currently under construction. For any question, feel
            free to contact us.
          </p>
          <img id='crane' alt='Crane' src='/images/macara.png' />

          <div className='contact-us'>
            <label className='contact-label' htmlFor='email'>
              <span>Email:</span>
              <input
                type='text'
                name='email'
                value={contactData.email}
                onChange={onChangeField}
              />
            </label>
            <label className='contact-label' htmlFor='subject'>
              <span>Subject:</span>
              <input
                type='text'
                name='subject'
                value={contactData.subject}
                onChange={onChangeField}
              />
            </label>
            <label className='contact-label' htmlFor='message'>
              <span>Message:</span>
              <textarea
                type='text'
                name='message'
                value={contactData.message}
                onChange={onChangeField}
              />
            </label>
            {errors.length > 0 ? <p className='errors'>{errors[0]}</p> : null}
            <button onClick={sendEmail} className='contact-btn'>
              Send
            </button>
          </div>
          <img id='under' alt='Under construction' src='/images/under.png' />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
