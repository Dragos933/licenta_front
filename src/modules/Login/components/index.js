import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../../../components/buttons/authButton';
import Footer from '../../../components/footer/index';
import Toast from '../../../components/toasts/index';

export default class Login extends React.Component {
  onChange = (e) => {
    this.props.setField({
      key: e.target.name,
      value: e.target.value
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await this.props.login({
      email: this.props.email,
      password: this.props.password
    });
  };

  isDisabled = ({ email, password }) => {
    if (email && password) {
      return false;
    }
    return true;
  };

  render() {
    const { errors } = this.props;
    return (
      <div className='login-container'>
        <div className='extra' />
        {errors.length > 0 ? (
          <Toast
            className='register-toast'
            toastMsg='Error!'
            errors={errors.length > 0}
          />
        ) : null}

        <div className='login'>
          <h1 className='component-title login-title'>Login</h1>
          <form onChange={this.onChange} className='login-form'>
            <label htmlFor='email' className='login-label'>
              Email
            </label>
            <input type='text' name='email' className='login-input' />
            <label htmlFor='password' className='login-label'>
              Password
            </label>
            <input type='password' name='password' className='login-input' />
          </form>
          {errors.map((item, index) => {
            return (
              <p className='error-msg' key={index}>
                - 
                {' '}
                {item}
              </p>
            );
          })}
          <AuthButton
            onClick={(e) => this.onSubmit(e)}
            buttonTxt='Login'
            className='login-btn basic-btn'
            disabled={this.isDisabled(this.props)}
          />
        </div>
        <img alt='Login' src='/images/Login.jpg' />
        <Footer />
        <Link to='/register' className='nav-reg nav-item'>
          Register
        </Link>
        <Link to='/' className='nav-lan nav-item'>
          Home
        </Link>
        <Link to='/forgot-password' className='nav-pas nav-item'>
          Forgot Password
        </Link>
      </div>
    );
  }
}
