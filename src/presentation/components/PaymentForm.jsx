import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ErrorMessage from './ErrorMessage';

const PaymentForm = ({ onSubmit, errorMessage }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const { cardNumber, expiryDate, cvv } = cardDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div className="form-group">
        <TextField
          id="cardNumber"
          label="Card Number"
          name="cardNumber"
          value={cardNumber}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          id="expiryDate"
          label="Expiry Date"
          name="expiryDate"
          value={expiryDate}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        <TextField
          id="cvv"
          label="CVV"
          name="cvv"
          value={cvv}
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

export default PaymentForm;
