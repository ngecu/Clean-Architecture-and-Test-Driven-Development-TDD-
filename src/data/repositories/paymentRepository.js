import apiService from '../services/apiService';

const processPayment = async (paymentData) => {
  // Call the API to process the payment
  const response = await apiService.post('/process-payment', paymentData);
  return response.data;
};

export default {
  processPayment,
};
