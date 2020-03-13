import React from 'react';

const AuthButton = (props) => {
  const { buttonTxt, onClick, className } = props;
  return (
    <button
      type='button'
      onClick={onClick}
      className={`auth-button ${className}`}>
      {buttonTxt}
    </button>
  );
};

export default AuthButton;
