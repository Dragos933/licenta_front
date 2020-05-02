import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../../../components/buttons/authButton';
import Footer from '../../../components/footer/index';
import api from '../../../api/auth';

const ResetPassword = (props) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errors, setErrors] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else {
      setRePassword(e.target.value);
    }
    
  };

  const onSubmit = async () => {
    if (password !== rePassword) {
      return setErrors('- Passwords do not match!');
    } else {
      setErrors('');
    }

    const code = window.location.href.split('code=')[1];
    await api.resetPassword({
      code,
      password,
      passwordConfirmation: rePassword,
    })
  }

  const isDisabled = () => {
    return !(password.length > 0 && rePassword.length > 0);
  }

    return (
      <div className='login-container'>
        <div className='extra' />
        <div className='login'>
          <h1 className='component-title login-title'>ResetPassword</h1>
          <form onChange={onChange} className='login-form'>
            <label htmlFor='password' className='login-label'>
              New Password
            </label>
            <input type='password' name='password' className='login-input' />
            <label htmlFor='rePassword' className='login-label'>
              Re-type Password
            </label>
            <input type='password' name='rePassword' className='login-input' />
          </form>
         <p className="error-reset-pass">{errors}</p>
          <AuthButton
            onClick={(e) => onSubmit(e)}
            buttonTxt='Reset'
            className='login-btn basic-btn'
            disabled={isDisabled()}
          />
        </div>
        <img alt='Login' src='/images/PlantingTree1.jpg' />
        <Footer />
        <Link to='/' className='nav-reg nav-item'>
          Home
        </Link>
        <Link to='/login' className='nav-lan nav-item'>
          Login
        </Link>
        <Link to='/register' className='nav-pas nav-item'>
          Register
        </Link>
      </div>
    );
}

export default ResetPassword;