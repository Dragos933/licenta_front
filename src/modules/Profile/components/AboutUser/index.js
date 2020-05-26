import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserData, getUserTree, updateUser } from '../../../../api/profile';
import ResponseToast from '../../../../components/responseToast';

const AboutUser = () => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [tree, setTree] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getUserData();
        setUserData(res.data);
        const resTree = await getUserTree(res.data.tree);
        setTree(resTree.data);
      } catch (error) {
        setErrors(error);
      }
    };
    getUser();
  }, []);

  const resetToastState = () => {
    setErrors([]);
    setSuccess(false);
  };

  const onChange = (e) => {
    resetToastState();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const saveUserData = async () => {
    try {
      resetToastState();
      const res = await updateUser(userData.id, userData);
      if (res.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <div className='about-container'>
      {errors.length > 0 || success ? (
        <ResponseToast
          type={success ? 'success' : 'error'}
          message={!success ? errors[0] : 'Data updated successfully.'}
          className='connection-toast'
        />
      ) : null}
      <div className='panel-info'>
        <p>My Details</p>
        <i className='far fa-user-circle' />
      </div>
      <div className='content'>
        <div className='user-info'>
          <div className='user-photo'>
            <img src='/images/forgotPassword.jpg' alt='UserImage' />
            <input className='choose-file' type='file' />
            <p>Change profile picture</p>
          </div>
          <div className='user-data'>
            <input
              onChange={onChange}
              value={userData.first_name ? userData.first_name : ''}
              name='first_name'
              type='text'
              placeholder='First-name'
            />
            <input
              onChange={onChange}
              value={userData.last_name ? userData.last_name : ''}
              name='last_name'
              type='text'
              placeholder='Last-name'
            />
            <input
              onChange={onChange}
              value={userData.email ? userData.email : ''}
              name='email'
              type='text'
              placeholder='E-mail'
            />
            <input
              disabled
              name='phone'
              value={userData.phone ? userData.phone : ''}
              type='text'
              placeholder='Phone'
            />
            {userData.phone ? (
              <p>
                <i className='far fa-check-circle verified' />
              </p>
            ) : (
              <Link
                to='/profile/verify-mobile'
                className='verify-mobile'
                value={userData.phone ? userData.phone : ''}>
                Verify mobile 
                {' '}
                <i className='fas fa-arrow-right' />
              </Link>
            )}
            <input
              onChange={onChange}
              value={userData.username ? userData.username : ''}
              name='username'
              type='text'
              placeholder='username'
            />
            <input
              onChange={onChange}
              value={userData.age ? userData.age : ''}
              name='age'
              type='text'
              placeholder='Age'
            />
            <input
              onChange={onChange}
              value={userData.address ? userData.address : ''}
              name='address'
              type='text'
              placeholder='Address'
            />
            <input
              onChange={onChange}
              value={userData.description ? userData.description : ''}
              name='description'
              type='text'
              placeholder='Description'
            />
            <button type='submit' onClick={saveUserData} className='save-btn'>
              Save data
            </button>
          </div>
        </div>
        <div className='tree-container'>
          <div className='tree-details'>
            <p>
Level:
              {tree ? tree.level : ''}
            </p>
          </div>
          <img
            className={`treeLevel${tree.level}`}
            src={`/images/TreeLvl${tree ? tree.level : 1}.png`}
            alt='Tree'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUser;
