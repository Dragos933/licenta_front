import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../../../components/buttons/authButton';
import ErrorModal from '../../../components/modals/auth';
import Footer from '../../../components/footer/index';
import Toast from '../../../components/toasts/index';

const VerifyNumber = (props) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const { errors, status, emailSent } = props;

  const onChange = (e) => {
    setPhone(e.target.value);
  };

  const onSubmit = async () => {
    await validate();
    if (errors.length === 0) {
      props.sendCode(phone);
      setPhone('');
    }
  };

  const validate = async () => {
    let c = 0;
    if (phone.length !== 10) {
      c++;
      props.registerError('- Phone number is too short!');
    } else {
      props.unregisterError('- Phone number is too short!');
    }
    if (!phone.match(/^\d+$/)) {
      c++;
      props.registerError('- Invalid phone number!');
    } else {
      props.unregisterError('- Invalid phone number!');
    }
    return c;
  };

  const isDisabledPhone = () => {
    return phone.length === 0;
  };

  const isDisabledCode = () => {
    return code.length === 0;
  };

  const hasError = () => {
    return errors.length > 0;
  };

  const onSubmitCode = async () => {
    await props.verifyCode(code);

    if (props.isVerified === 'OK') {
      props.history.push('/home');
    }
  };

  return (
    <div className='login-container forgot-pass-container'>
      <div className='extra' />
      <Toast className='forgot-toast' toastMsg='Error!' errors={hasError()} />
      <div className='login'>
        <h1 className='component-title forgot-title'>Verify Phone</h1>
        <p className='forgot-descr'>
          {emailSent
            ? 'The code has been sent. You might have to wait a few seconds before receiving it.'
            : 'We will send you a sms text with a validation code.'}
        </p>
        {!emailSent ? (
          <form onChange={onChange} className='login-form forgot-form'>
            <label
              htmlFor='email'
              className={`login-label forgot-label ${
                errors.length > 0 ? 'error-label' : ''
              }`}>
              Phone
              <i
                className={`fas fa-exclamation-circle error-icon ${
                  errors.length === 0 ? 'hide' : ''
                }`}>
                <ErrorModal errors={errors} className='auth-error-modal' />
              </i>
            </label>
            <input
              type='text'
              name='phone'
              className={`login-input ${
                errors.length > 0 ? 'error-input' : ''
              }`}
            />
          </form>
        ) : (
          <form className='login-form forgot-form'>
            <label
              htmlFor='code'
              className={`login-label forgot-label ${
                errors.length > 0 ? 'error-label' : ''
              }`}>
              Code
              <i
                className={`fas fa-exclamation-circle error-icon ${
                  errors.length === 0 ? 'hide' : ''
                }`}>
                <ErrorModal errors={errors} className='auth-error-modal' />
              </i>
            </label>
            <input
              type='text'
              name='code'
              onChange={(e) => setCode(e.target.value)}
              value={code}
              className={`login-input ${
                errors.length > 0 ? 'error-input' : ''
              }`}
            />
          </form>
        )}
        {!emailSent ? (
          <AuthButton
            onClick={(e) => onSubmit(e)}
            buttonTxt='Send sms'
            className='login-btn basic-btn forgot-btn'
            disabled={isDisabledPhone()}
          />
        ) : (
          <AuthButton
            onClick={(e) => onSubmitCode(e)}
            buttonTxt='Send code'
            className='login-btn basic-btn forgot-btn'
            disabled={isDisabledCode()}
          />
        )}
      </div>
      <img alt='Login' src='/images/ForgotPassword.jpg' />
      <Link to='/register' className='nav-reg nav-item'>
        Register
      </Link>
      <Link to='/' className='nav-lan nav-item'>
        Home
      </Link>
      <Link to='/login' className='nav-pas nav-item'>
        Login
      </Link>
      <Footer />
    </div>
  );
};

export default VerifyNumber;
