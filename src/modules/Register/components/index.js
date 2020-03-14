import React from 'react';
import AuthButton from '../../../components/buttons/authButton';
import ErrorModal from '../../../components/modals/auth';

export default class Register extends React.Component {
  
  onChange = (e) => {
    this.props.setField({
      [e.target.name]: e.target.value,
    })
  }

  registerError = ({ regex, item, errorMessage, registerData}) => {
    console.log(registerData, item);
    this.props.registerError({
      error: {
        [item]: errorMessage,
      },
      key: item,
      registerType: registerData[item].matches(regex) ? 'unergister' : 'register',
    })
  }

  validate = (registerData) => {
    Object.keys(registerData).map(item => {
      if (!registerData[item]) {
        // this.props.registerError({ item})
        this.registerError({ item, errorMessage: '- This field is mandatory', registerType: 'register'});
      } else {
        this.registerError({ item, errorMessage: '- This field is mandatory', registerType: 'unregister'})
      }
      if (registerData[item]) {
        console.log(registerData)
        this.registerError({ regex: /(?=.*?[A-Z])/, item, errorMessage:'- At lesat 1 uppercase!', registerData });
        if (!registerData[item].match(/(?=.*?[A-Z])/)) {
          this.registerError({ item, erroMessage: '- At least 1 uppercase!', registerType: 'register'});
        } else {
          this.registerError({ item, erroMessage: '- At least 1 uppercase!', registerType: 'unregister'});
        }
        if (!registerData[item].match(/(?=.*?[a-z])/)) {
          this.registerError({ item, erroMessage: '- At least 1 lowercase!', registerType: 'register'});
        } else {
          this.registerError({ item, erroMessage: '- At least 1 lowercase!', registerType: 'unregister'});
        }
        if (!registerData[item].match(/(?=.*?[0-9])/)) {
          this.registerError({ item, erroMessage: '- At least 1 digit!', registerType: 'register'});
        } else {
          this.registerError({ item, erroMessage: '- At least 1 digit!', registerType: 'unregister'});
        }
        if (!registerData[item].match(/(?=.*?[#?!@$%^&*-])/)) {
          this.registerError({ item, erroMessage: '- At least 1 special character!', registerType: 'register'});
        } else {
          this.registerError({ item, erroMessage: '- At least 1 uppercase!', registerType: 'unregister'});
        }
      }
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.validate(this.props.registerData)) {
      this.props.register();
    }
  }

  isDisabled = ({ errors }) => {
    const res = Object.keys(errors).filter(item => {
      if (errors[item]){
        console.log(errors[item]);
      }
    });
    console.log(res);
  }

  render() {
    console.log(this.props.errors);
    const { errors } = this.props;
    console.log(errors.username.length);
    return (
      <div className="register-container">
        <div className="register">
          <h1 className="component-title register-title">Register</h1>
          <form onChange={this.onChange} className='register-form'>
            <label htmlFor='username' className={`register-label ${errors.username.length > 0 ? 'error-label' : ''}`}>
              Username
              <i className={`fas fa-exclamation-circle error-icon ${errors.username.length === 0 ? 'hide': ''}`}>
                <ErrorModal
                  errors={errors.username}
                />
              </i>
            </label>
            <input type='text' name='username' className={`register-input ${errors.username.length > 0 ? 'input-error' : ''}`} />
            <label htmlFor='email' className={`register-label ${errors.email.length > 0 ? 'error-label' : ''}`}>
              Email
              <i className={`fas fa-exclamation-circle error-icon ${errors.email.length === 0 ? 'hide': ''}`}>
                <ErrorModal
                  errors={errors.email}
                />
              </i>
            </label>
            <input type='text' name='email' className={`register-input ${errors.email.length > 0 ? 'input-error' : ''}`} />
            <label htmlFor='password' className={`register-label ${errors.password.length > 0 ? 'error-label' : ''}`}>
              Password
              <i className={`fas fa-exclamation-circle error-icon ${errors.password.length === 0 ? 'hide': ''}`}>
                <ErrorModal
                  errors={errors.password}
                />
              </i>
            </label>
            <input type='password' name='password' className={`register-input ${errors.password.length > 0 ? 'input-error' : ''}`} />
            <label htmlFor='rePassword' className={`register-label ${errors.rePassword.length > 0 ? 'error-label' : ''}`}>
              Retype Password
              <i className={`fas fa-exclamation-circle error-icon ${errors.rePassword.length === 0 ? 'hide': ''}`}>
                <ErrorModal
                  errors={errors.rePassword}
                />
              </i>
            </label>
            <input type='password' name='rePassword' className={`register-input ${errors.rePassword.length > 0 ? 'input-error' : ''}`} />
          </form>
          <AuthButton
            onClick={(e) => this.onSubmit(e)}
            buttonTxt='Register'
            className='register-btn basic-btn'
            disabled={this.isDisabled(this.props)}
          />
        </div>
      </div>
    );
  }
}