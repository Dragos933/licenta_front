import React from 'react';

const AuthButton = (props) => {
  const { buttonTxt, onClick, className, disabled } = props;
  return (
    <>
      {disabled === true ? (
        <button
          type='button'
          onClick={onClick}
          className={`auth-button ${className}`}
          disabled>
          {buttonTxt}
        </button>
      ) : (
        <button
          type='button'
          onClick={onClick}
          className={`auth-button ${className}`}>
          {buttonTxt}
        </button>
      )}
    </>
  );
};

export default AuthButton;
