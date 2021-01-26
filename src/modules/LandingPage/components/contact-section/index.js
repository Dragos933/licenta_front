import React, { useState } from 'react';

const ContactSection = (props) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { onClickSubmit: onSubmit } = props;

  const onChangeField = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const onClickSubmit = async () => {
    const names = userData.name.split(' ');
    onSubmit({
      ...userData,
      first_name: names[0],
      last_name: names[1]
    });
    setUserData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='section contact-section'>
      <div className='contact-container' name='contact'>
        <h2>Contact</h2>
        <p>contact@apio.digital</p>
        <div className='social-links'>
          <a
            target='blank'
            href='https://www.linkedin.com/company/apiodigital/'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            target='blank'
            href='https://www.youtube.com/channel/UCgUpcbRr1NRVELJ7qcxsetA'>
            <i className='fab fa-youtube youtube-icon'></i>
          </a>
        </div>
        <div className='form-container'>
          <label htmlFor='name'>
            <span>Name</span>
            <input
              onChange={onChangeField}
              value={userData.name}
              type='text'
              placeholder='Name'
              id='name'
              name='name'
            />
          </label>
          <label htmlFor='email'>
            <span>Email</span>
            <input
              onChange={onChangeField}
              value={userData.email}
              type='text'
              placeholder='Email'
              id='email'
              name='email'
            />
          </label>
          <label htmlFor='subject'>
            <span>Subject</span>
            <input
              onChange={onChangeField}
              value={userData.subject}
              type='text'
              placeholder='Subject'
              id='subject'
              name='subject'
            />
          </label>
          <label htmlFor='message'>
            <span>Message</span>
            <textarea
              onChange={onChangeField}
              value={userData.message}
              placeholder='Write your message here'
              id='message'
              name='message'
            />
          </label>
          <button onClick={onClickSubmit} className='send-btn btn'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
