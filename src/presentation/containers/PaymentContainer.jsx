import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaymentForm from '../components/PaymentForm';
import BillingAddressForm from '../components/BillingAddressForm';
import VerificationForm from '../components/VerificationForm';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { processPayment } from '../state/slices/paymentSlice';

const PaymentContainer = () => {
  const [step, setStep] = useState(1);
  const [paymentData, setPaymentData] = useState({});
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.payment);

  const handlePaymentSubmit = (cardDetails) => {
    setPaymentData((prevData) => ({ ...prevData, cardDetails }));
    setStep(2);
  };

  const handleBillingSubmit = (billingAddress) => {
    setPaymentData((prevData) => ({ ...prevData, billingAddress }));
    setStep(3);
  };

  const handleVerificationSubmit = (verificationCode) => {
    const completePaymentData = { ...paymentData, verificationCode };
    dispatch(processPayment(completePaymentData));
  };

  return (
    <div className="payment-container">
      {status === 'loading' && <Loader />}
      {error && <ErrorMessage message={error} />}
      {step === 1 && <PaymentForm onSubmit={handlePaymentSubmit} errorMessage={error} />}
      {step === 2 && <BillingAddressForm onSubmit={handleBillingSubmit} errorMessage={error} />}
      {step === 3 && <VerificationForm onSubmit={handleVerificationSubmit} errorMessage={error} />}
    </div>
  );
};

export default PaymentContainer;
