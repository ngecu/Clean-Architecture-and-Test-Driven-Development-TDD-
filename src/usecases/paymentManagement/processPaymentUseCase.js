import paymentRepository from '../../data/repositories/paymentRepository';

const processPaymentUseCase = async (paymentData) => {
  // Implement the logic to process the payment
  // This can involve making API calls to payment gateways, etc.
  const response = await paymentRepository.processPayment(paymentData);
  return response;
};

export default processPaymentUseCase;
