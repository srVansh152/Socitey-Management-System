import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationForm from './components/RegistrationPage'
import Login from './components/Login'
import ForgetPassword from './components/ForgetPassword'
import OtpVerification from './components/OtpVerification'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationForm/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/password' element={<ForgetPassword/>}/>
          <Route path='/otp' element={<OtpVerification/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App