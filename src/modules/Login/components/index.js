import React from 'react';
import AuthButton from '../../../components/buttons/authButton';

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

  render() {
    return (
      <div className='login-container'>
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
          <AuthButton
            onClick={(e) => this.onSubmit(e)}
            buttonTxt='Login'
            className='login-btn basic-btn'
          />
        </div>
      </div>
    );
  }
}
