import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignupForm from '../../components/auth/SignupForm';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMessage';
import Loader from '../../components/Loader';
import { registerUser } from '../../state/slices/userSlice';

const SignupContainer = () => {
  const dispatch = useDispatch();
  const { status, error, user } = useSelector((state) => state.user);

  const handleSubmit = (formData) => {
    dispatch(registerUser(formData));
  };

  return (
    <div className="signup-container">
      {status === 'loading' && <Loader />}
      {status === 'succeeded' && <SuccessMessage message="Registration successful!" />}
      {status === 'failed' && <ErrorMessage message={error} />}
      {status !== 'loading' && status !== 'succeeded' && (
        <SignupForm onSubmit={handleSubmit} errorMessage={error} />
      )}
    </div>
  );
};

export default SignupContainer;
