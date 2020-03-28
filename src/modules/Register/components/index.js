import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../../../components/buttons/authButton';
import ErrorModal from '../../../components/modals/auth';
import Toast from '../../../components/toasts/index';
import Footer from '../../../components/footer/index';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmited: false
    };
  }

  componentDidMount() {
    this.props.resetFields();
  }

  onChange = (e) => {
    this.props.setField({
      [e.target.name]: e.target.value
    });
  };

  validateField = (item, registerData, validations) => {
    if (validations.includes('upper case')) {
      if (!registerData[item].match(/(?=.*?[A-Z])/)) {
        this.props.registerError({
          key: item,
          error: '- At least 1 upper case!'
        });
      } else {
        this.props.unregisterError({
          key: item,
          error: '- At least 1 upper case!'
        });
      }
    }

    if (validations.includes('lower case')) {
      if (!registerData[item].match(/(?=.*?[a-z])/)) {
        this.props.registerError({
          key: item,
          error: '- At least 1 lower case!'
        });
      } else {
        this.props.unregisterError({
          key: item,
          error: '- At least 1 lower case!'
        });
      }
    }

    if (validations.includes('digit')) {
      if (!registerData[item].match(/(?=.*?[0-9])/)) {
        this.props.registerError({ key: item, error: '- At least 1 digit!' });
      } else {
        this.props.unregisterError({ key: item, error: '- At least 1 digit!' });
      }
    }

    if (validations.includes('special character')) {
      if (!registerData[item].match(/(?=.*?[#?!@$%^&*-])/)) {
        this.props.registerError({
          key: item,
          error: '- At least 1 special character!'
        });
      } else {
        this.props.unregisterError({
          key: item,
          error: '- At least 1 special character!'
        });
      }
    }

    if (validations.includes('limit')) {
      if (registerData[item].length < 8) {
        this.props.registerError({
          key: item,
          error: '- Must contain at least 8 characters!'
        });
      } else {
        this.props.unregisterError({
          key: item,
          error: '- Must contain at least 8 characters!'
        });
      }
    }

    if (validations.includes('email')) {
      if (
        !registerData[item].match(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )
      ) {
        this.props.registerError({ key: item, error: '- Invalid email!' });
      } else {
        this.props.unregisterError({ key: item, error: '- Invalid email!' });
      }
    }
  };

  validate = (registerData) => {
    Object.keys(registerData).map((item) => {
      if (!registerData[item]) {
        this.props.registerError({
          key: item,
          error: '- This field is mandatory!'
        });
      } else {
        this.props.unregisterError({
          key: item,
          error: '- This field is mandatory!'
        });
      }

      if (registerData[item]) {
        if (item === 'pass' || item === 'rePassword') {
          this.validateField(item, registerData, [
            'upper case',
            'lower case',
            'digit',
            'special character',
            'limit'
          ]);
          if (registerData.pass !== registerData.rePassword) {
            this.props.registerError({
              key: item,
              error: '- Passwords do not match!'
            });
          } else {
            this.props.unregisterError({
              key: item,
              error: '- Passwords do not match!'
            });
          }
        }
        if (item === 'email') {
          this.validateField(item, registerData, ['email']);
        }
        if (item === 'username') {
          this.validateField(item, registerData, [
            'upper case',
            'lower case',
            'digit',
            'limit'
          ]);
        }
      }
      return null;
    });
  };

  formatData = (data) => {
    return {
      username: data.username,
      email: data.email,
      password: data.pass,
      role: {
        name: 'Public',
        description: 'Default role for users',
        type: 'public'
      },
      confirmed: false
    };
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { registerData } = this.props;
    await this.validate(registerData);
    const { errors } = this.props;
    const res = Object.keys(errors).map((item) => {
      if (item !== 'register') {
        return errors[item].length;
      }
      return 0;
    });
    let numberOfErors = 0;
    for (let i = 0; i < res.length; i++) {
      numberOfErors += res[i];
    }
    if (numberOfErors === 0) {
      const formatedData = this.formatData(registerData);
      await this.props.register(formatedData);
      if (this.props.hasRegistered) {
        this.setState({
          ...this.state,
          isSubmited: true
        });
        await this.props.createTree();
      }
    }
  };

  hasErrors = () => {
    const { errors } = this.props;
    const lens = Object.keys(errors).map((item) => errors[item].length);
    const hasErrors = lens.filter((item) => item > 0);
    return hasErrors.length !== 0;
  };

  render() {
    const { errors } = this.props;
    const { isSubmited } = this.state;
    return (
      <div className='register-container'>
        <div className='extra' />
        <Toast
          className={`register-toast ${isSubmited ? 'success-toast' : ''}`}
          toastMsg={isSubmited ? 'Success!' : 'Error!'}
          errors={isSubmited ? true : this.hasErrors()}
        />
        {isSubmited ? (
          <div className='registration-msg vivify popIn delay-1000'>
            <p className='first'>Thank you for your registration!</p>
            <p className='second'>Check your email to confirm your account.</p>
          </div>
        ) : null}
        <div
          className={`register vivify ${!isSubmited ? 'slide-in' : ''} ${
            isSubmited ? 'fold' : ''
          }`}>
          <h1 className='component-title register-title'>Register</h1>
          <form onChange={this.onChange} className='register-form'>
            <label
              htmlFor='username'
              className={`register-label ${
                errors.username.length > 0 ? 'error-label' : ''
              }`}>
              Username
              <i
                className={`fas fa-exclamation-circle error-icon ${
                  errors.username.length === 0 ? 'hide' : ''
                }`}>
                <ErrorModal errors={errors.username} />
              </i>
            </label>
            <input
              type='text'
              name='username'
              className={`register-input ${
                errors.username.length > 0 ? 'input-error' : ''
              }`}
            />
            <label
              htmlFor='email'
              className={`register-label ${
                errors.email.length > 0 ? 'error-label' : ''
              }`}>
              Email
              <i
                className={`fas fa-exclamation-circle error-icon ${
                  errors.email.length === 0 ? 'hide' : ''
                }`}>
                <ErrorModal errors={errors.email} />
              </i>
            </label>
            <input
              type='text'
              name='email'
              className={`register-input ${
                errors.email.length > 0 ? 'input-error' : ''
              }`}
            />
            <label
              htmlFor='pass'
              className={`register-label ${
                errors.pass.length > 0 ? 'error-label' : ''
              }`}>
              Password
              <i
                className={`fas fa-exclamation-circle error-icon ${
                  errors.pass.length === 0 ? 'hide' : ''
                }`}>
                <ErrorModal errors={errors.pass} />
              </i>
            </label>
            <input
              type='password'
              name='pass'
              className={`register-input ${
                errors.pass.length > 0 ? 'input-error' : ''
              }`}
            />
            <label
              htmlFor='rePassword'
              className={`register-label ${
                errors.rePassword.length > 0 ? 'error-label' : ''
              }`}>
              Retype Password
              <i
                className={`fas fa-exclamation-circle error-icon ${
                  errors.rePassword.length === 0 ? 'hide' : ''
                }`}>
                <ErrorModal errors={errors.rePassword} />
              </i>
            </label>
            <input
              type='password'
              name='rePassword'
              className={`register-input ${
                errors.rePassword.length > 0 ? 'input-error' : ''
              }`}
            />
            {errors.register.map((item, index) => {
              return (
                <p key={index} className='custom-error-register'>
                  - 
                  {' '}
                  {item}
                </p>
              );
            })}
          </form>
          <AuthButton
            onClick={(e) => this.onSubmit(e)}
            buttonTxt='Register'
            className='register-btn basic-btn'
          />
        </div>
        <Footer />
        <Link className='nav-item nav-reg' to='/login'>
          Login
        </Link>
        <Link className='nav-item nav-log' to='/'>
          Home
        </Link>
        <img alt='Register' src='/images/Register.jpg' />
      </div>
    );
  }
}
