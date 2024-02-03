// SignUp.js ubicado en src/components/SignUp/SignUp.js
import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'; // Asegúrate de que el logo esté en la ruta correcta
import { Link } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implementar lógica de registro aquí
        console.log(email, password, firstName, lastName);
        // Podrías enviar esta información a tu backend para crear una nueva cuenta
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded flex flex-col items-center">
                <img src={logo} alt="Community Lab Alliance" className="mb-4 h-12" />
                <h2 className="text-2xl text-center font-semibold mb-2">Sign Up</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-xs">
                    <input
                        type="email"
                        placeholder="Email *"
                        className="px-4 py-2 border rounded w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password *"
                        className="px-4 py-2 border rounded w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="First Name *"
                        className="px-4 py-2 border rounded w-full"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name *"
                        className="px-4 py-2 border rounded w-full"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150 ease-in-out w-full"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex justify-center items-center mt-4 w-full max-w-xs">
                    <Link to="/sign-in" className="text-blue-600 hover:underline">
                        Already have an account? Sign In
                    </Link>        </div>
            </div>
        </div>
    );
}

export default SignUp;
