import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'; // Asegúrate de que el logo esté en la ruta correcta
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailSubmitted, setEmailSubmitted] = useState(false);

  // Asume que la CAPTCHA ha sido validada para simplificar el ejemplo
  const [captchaValidated] = useState(true);

  let navigate = useNavigate(); // Hook para navegar

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    // Aquí agregarías la lógica para manejar el correo electrónico ingresado
    console.log('Email submitted:', email);
    // Suponiendo que todo salga bien, avanzas a la siguiente etapa
    setEmailSubmitted(true);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (!captchaValidated) {
      alert('Please complete the CAPTCHA');
      return;
    }
    // Aquí agregarías la lógica para manejar la contraseña ingresada
    console.log('Password submitted:', password);
    // Suponiendo que las credenciales son correctas, rediriges al usuario al dashboard
    navigate('/dashboard');
  };

  const handleOTPRequest = () => {
    console.log('OTP requested for:', email);
    // Lógica para manejar la solicitud de OTP
  };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded flex flex-col items-center">
                <img src={logo} alt="Community Lab Alliance" className="h-12 mb-4" />
                <h2 className="text-2xl text-center font-semibold mb-2">Sign in</h2>
                <p className="text-center text-sm mb-8">to access Community Lab Alliance</p>

                {!isEmailSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-4 w-full max-w-xs">
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
                ) : (
                    <form onSubmit={handlePasswordSubmit} className="flex flex-col space-y-4 w-full max-w-xs">
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-4 py-2 border rounded w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150 ease-in-out w-full"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            onClick={handleOTPRequest}
                            className="text-blue-600 hover:underline text-center"
                        >
                            Sign in using email OTP
                        </button>
                    </form>
                )}
                
                <div className="flex justify-between items-center mt-4 w-full max-w-xs">
                    <Link to="/sign-up" className="text-blue-600 hover:underline">Don't have an account? Sign Up</Link>
                    <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
