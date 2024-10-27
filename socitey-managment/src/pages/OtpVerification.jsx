import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Component() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(30)
  const inputRefs = useRef([])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value !== '' && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="flex min-h-screen">
    {/* Left side with illustration and text */}
    <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between bg-gray-50">
      <div className="mb-8">
        <div className="text-4xl font-bold text-gray-800">
          Dash<span className="text-orange-500">Stack</span>
        </div>
        
      </div>
      <div className="flex-grow  flex items-center justify-center">
        <img src="/image/forget.jpg" alt="Society Management Illustration" className="max-w-full h-auto" />
      </div>
      
     
    </div>

    {/* Right side with login form */}
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md shadow-lg p-6 rounded-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Enter OTP</h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter the 6 digit code that was sent to your phone number.
        </p>
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-orange-500 focus:outline-none"
            />
          ))}
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-600">
            {timeLeft > 0 ? `00:${timeLeft.toString().padStart(2, '0')} sec` : 'Time expired'}
          </span>
          <button className="text-sm text-orange-500 hover:text-orange-600">Resend OTP</button>
        </div>
        <Link to="/reset" className="w-full flex justify-center  bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-300">
          Verify
          </Link>
      </div>
    </div>
  </div>
  )
}