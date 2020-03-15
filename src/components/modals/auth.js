import React from 'react';

const AuthErrorModal = (props) => {
  const { errors, className } = props;
  return (
    <div className={`auth-error-modal ${className}`}>
      {errors.map((item, index) => (
        <p className='auth-error' key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};
export default AuthErrorModal;
