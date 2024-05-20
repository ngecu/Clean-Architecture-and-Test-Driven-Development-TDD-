import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ErrorMessage from './ErrorMessage';

const BillingAddressForm = ({ onSubmit, errorMessage }) => {
  const [billingAddress, setBillingAddress] = useState({
    address: '',
    city: '',
    zipCode: ''
  });

  const { address, city, zipCode } = billingAddress;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(billingAddress);
  };

  return (
    <form onSubmit={handleSubmit} className="billing-address-form">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div className="form-group">
        <TextField
          id="address"
          label="Address"
          name="address"
          value={address}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          id="city"
          label="City"
          name="city"
          value={city}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          id="zipCode"
          label="Zip Code"
          name="zipCode"
          value={zipCode}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Next
      </Button>
    </form>
  );
};

export default BillingAddressForm;
