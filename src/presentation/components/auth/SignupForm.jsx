import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage';
import { Button, TextField } from '@mui/material';

const SignupForm = ({ onSubmit, errorMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div className="form-group">
       
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          minLength={6}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          minLength={6}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <Button variant="contained"  type="submit">Sign Up</Button>
      
    </form>
  );
};

export default SignupForm;
