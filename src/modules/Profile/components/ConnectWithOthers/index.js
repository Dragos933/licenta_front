import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ConnectionItem from './ConnectionItem/index';
import {
  getUserConnections,
  createConnection,
  getSpecificUser
} from '../../../../api/profile';
import ResponseToast from '../../../../components/responseToast';

const ConnectWithOthers = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [connections, setConnections] = useState([]);
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getConnections = async () => {
      try {
        const res = await getUserConnections(user.id);
        setConnections(res.data);
      } catch (error) {
        setErrors(error);
      }
    };
    getConnections();
  }, [user.id]);

  const resetToastState = () => {
    setErrors([]);
    setSuccess(false);
  };

  const onChange = (e) => {
    resetToastState();
    setUsername(e.target.value);
  };

  const onSendRequest = async () => {
    try {
      resetToastState();
      const res = await getSpecificUser(username);
      if (res.data.length > 0) {
        const connection = await createConnection({
          username,
          date: moment().format('YYYY-MM-DD'),
          status: 'Pending',
          user: user.id
        });
        if (connection.status === 200) {
          setSuccess(true);
        }
      } else {
        setErrors(['The username does not exist.']);
      }
    } catch (error) {
      setErrors([error.msg]);
    }
  };

  return (
    <div className='connect-container'>
      {errors.length > 0 || success ? (
        <ResponseToast
          type={success ? 'success' : 'error'}
          message={!success ? errors[0] : 'Invitation sent successfully.'}
          className='connection-toast'
        />
      ) : null}
      <div className='panel-info'>
        <p>Connect With Others</p>
        <i className='fas fa-link' />
      </div>
      <div className='content'>
        <p className='connect-text'>
          If you connect with other people on the website, you will get an
          invite each time your friend signs up to an event.
        </p>
        <div className='invite-friend'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={onChange}
          />
          <p onClick={onSendRequest}>Send request.</p>
        </div>
        <p className='connection-text'>Your connections</p>
        <div className='connections'>
          {connections.map((item, index) => {
            return (
              <ConnectionItem
                key={index}
                first_name={item.username}
                user_photo="/images/CatPhotoSample.jpg"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithOthers;
