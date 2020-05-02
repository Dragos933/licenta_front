import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../../../components/buttons/authButton';
import ErrorModal from '../../../components/modals/auth';
import Footer from '../../../components/footer/index';
import Toast from '../../../components/toasts/index';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const serverError = props.errors;
  const { hasSubmitted } = props;

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    await validate();
    if (errors.length === 0) {
      await props.sendEmail(email);
    }
  };

  const validate = () => {
    if (
      !email.match(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      setErrors([...errors, '- Invalid email!']);
    } else {
      errors.splice(errors.indexOf('- Invalid email!'), 1);
      setErrors(errors);
    }
  };

  const isDisabled = () => {
    return email.length === 0;
  };

  const hasError = () => {
    return errors.length > 0 || serverError.length > 0;
  };

  return (
    <div className='login-container forgot-pass-container'>
      <div className='extra' />
      {!hasSubmitted ? (
        <Toast className='forgot-toast' toastMsg='Error!' errors={hasError()} />
      ) : null}
      {!hasSubmitted ? (
        <div className={`login ${hasSubmitted ? 'submitted' : ''}`}>
          <h1 className='component-title forgot-title'>Forgot Password</h1>
          <p className='forgot-descr'>
            We will send you an email with a reset password link.
          </p>
          <form onChange={onChange} className='login-form forgot-form'>
            <label
              htmlFor='email'
              className={`login-label forgot-label ${
                errors.length > 0 ? 'error-label' : ''
              }`}>
              Email
              <i
                className={`fas fa-exclamation-circle error-icon ${
                  errors.length === 0 ? 'hide' : ''
                }`}>
                <ErrorModal errors={errors} className='auth-error-modal' />
              </i>
            </label>
            <input
              type='text'
              name='email'
              className={`login-input ${
                errors.length > 0 ? 'error-input' : ''
              }`}
            />
          </form>
          <AuthButton
            onClick={(e) => onSubmit(e)}
            buttonTxt='Send email'
            className='login-btn basic-btn forgot-btn'
            disabled={isDisabled()}
          />
        </div>
      ) : (
        <p className='forgot-success'>
          We've send you and email with the reset link!
        </p>
      )}

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

export default ForgotPassword;
