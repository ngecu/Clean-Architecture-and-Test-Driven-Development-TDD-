import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ErrorMessage from './ErrorMessage';

const VerificationForm = ({ onSubmit, errorMessage }) => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(verificationCode);
  };

  return (
    <form onSubmit={handleSubmit} className="verification-form">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div className="form-group">
        <TextField
          id="verificationCode"
          label="Verification Code"
          name="verificationCode"
          value={verificationCode}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Verify
      </Button>
    </form>
  );
};

export default VerificationForm;
