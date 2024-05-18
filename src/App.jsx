import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupPage from './pages/auth/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignupPage/>
    </>
  )
}

export default App
