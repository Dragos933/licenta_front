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
    let registerType = null;
    if (registerData[item].match(regex)) {
      registerType = 'unregister';
    } else {
      registerType = 'register';
    }
    this.props.registerError({
      error: {
        [item]: errorMessage,
      },
      key: item,
      registerType,
    });
    return registerType === 'register' ? 1 : -1;
  }

  validate = (registerData) => {
    return Object.keys(registerData).map(item => {
      let c = 0;
      if (!registerData[item]) {
        c++;
        this.props.registerError({ key: item, error: { [item] : '- This field is mandatory'}, registerType: 'register'});
      } else {
        c--;
        this.props.registerError({ key: item, error: { [item] : '- This field is mandatory'}, registerType: 'unregister'});
      }
      if (registerData[item] && !['username', 'email'].includes(item)) {
        c += this.registerError({ regex: /(?=.*?[A-Z])/, item, errorMessage: '- At least 1 upper case!', registerData });
        c += this.registerError({ regex: /(?=.*?[a-z])/, item, errorMessage: '- At least 1 lower case!', registerData });
        c += this.registerError({ regex: /(?=.*?[0-9])/, item, errorMessage: '- At least 1 digit!', registerData});
        c += this.registerError({ regex: /(?=.*?[#?!@$%^&*-])/, item, errorMessage: '- At least 1 special character!', registerData});
        c += this.registerError({ regex: /(^\w{8,}$)/, item, errorMessage: '- At least 8 characters!', registerData});
        if (registerData['pass'] !== registerData['rePassword']) {
          c++;
          this.props.registerError({ key: item, error: { [item] : '- The passwords do not match!'}, registerType: 'register'});
        } else {
          c--;
          this.props.registerError({ key: item, error: { [item] : '- The passwords do not match!'}, registerType: 'unregister'});
        }
      }
      if (registerData[item] && item === 'email') {
        c += this.registerError({ regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, item, errorMessage: '- Invalid email address!', registerData})
      }
      if (registerData[item] && item === 'username') {
        c += this.registerError({ regex: /(^\w{8,}$)/, item, errorMessage: '- At least 8 characters!', registerData});
        c += this.registerError({ regex: /(?=.*?[A-Z])/, item, errorMessage: '- At least 1 upper case!', registerData });
        c += this.registerError({ regex: /(?=.*?[a-z])/, item, errorMessage: '- At least 1 lower case!', registerData });
        c += this.registerError({ regex: /(?=.*?[0-9])/, item, errorMessage: '- At least 1 digit!', registerData});
      }
      return c;
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { registerData } = this.props;
    const res = this.validate(registerData).map(item => {
      if (item > 0) {
        return item;
      }
    }).length === 0
    if (res) {
      this.props.register();
    }
  }

  render() {
    const { errors } = this.props;
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
            <label htmlFor='pass' className={`register-label ${errors.pass.length > 0 ? 'error-label' : ''}`}>
              Password
              <i className={`fas fa-exclamation-circle error-icon ${errors.pass.length === 0 ? 'hide': ''}`}>
                <ErrorModal
                  errors={errors.pass}
                />
              </i>
            </label>
            <input type='password' name='pass' className={`register-input ${errors.pass.length > 0 ? 'input-error' : ''}`} />
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
          />
        </div>
      </div>
    );
  }
}