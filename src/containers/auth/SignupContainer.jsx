import React, { useState } from 'react';
import SignupForm from '../../components/auth/SignupForm';
import ErrorMessage from '../../components/auth/ErrorMessage';
import SuccessMessage from '../../components/auth/SuccessMessage';
import  registerUserUseCase  from '../../usecases/userManagement/registerUserUseCase';

const SignupContainer = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async ({ name, email, password }) => {
    try {
      await registerUserUseCase(name, email, password);
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  return (
    <div className="signup-container">
      {success ? (
        <SuccessMessage message="Registration successful. Please check your email for verification." />
      ) : (
        <>
          {error && <ErrorMessage message={error} />}
          <SignupForm onSubmit={handleSubmit} errorMessage={error} />
        </>
      )}
    </div>
  );
};

export default SignupContainer;
