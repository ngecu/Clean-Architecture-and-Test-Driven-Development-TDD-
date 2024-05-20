import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import processPaymentUseCase from '../../../usecases/paymentManagement/processPaymentUseCase';

export const processPayment = createAsyncThunk(
  'payment/processPayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await processPaymentUseCase(paymentData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    status: 'idle',
    error: null,
    success: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.success = action.payload;
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
