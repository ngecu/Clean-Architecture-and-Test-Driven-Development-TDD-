import React from 'react';

const SignupButton = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className="signup-button">
      Sign Up
    </button>
  );
};

export default SignupButton;
