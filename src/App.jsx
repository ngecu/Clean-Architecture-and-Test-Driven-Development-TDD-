import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupPage from './presentation/pages/auth/SignupPage'
import { Provider } from 'react-redux';
import store from './presentation/state/store';
import { Container, Grid } from '@mui/material'
import PaymentPage from './presentation/pages/PaymentPage'

function App() {


  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
  <Grid xs={12}>
    <img src="https://mipay.cash/media/administration_gateway_logo/mipay.png" alt="" />
  </Grid>
  <Grid xs={12}>
    <SignupPage/>
    {/* <PaymentPage/> */}
  </Grid>
  
</Grid>
      
      </Container>
    </Provider>
  )
}

export default App
