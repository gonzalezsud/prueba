// ForgotPassword.js ubicado en src/components/ForgotPassword/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to handle password reset here
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded flex flex-col items-center">
        <img src={logo} alt="Community Lab Alliance" className="mb-4 h-12" />
        <h2 className="text-2xl text-center font-semibold mb-2">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-xs">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 border rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150 ease-in-out w-full"
          >
            Next
          </button>
        </form>
        <div className="mt-4 w-full max-w-xs">
          <Link to="/sign-in" className="text-blue-600 hover:underline">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
