// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import logo from './assets/images/logo.png';
import SignIn from './components/SignIn/SignIn'; // Importa el componente SignIn
// import Home from './components/Home';
import BrindoSoluciones from './components/BrindoSoluciones';
import Nosotros from './components/Nosotros';
import Blog from './components/Blog';
import MiPerfil from './components/MiPerfil';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'; // Importa el componente ForgotPassword
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  const activeClassName = "text-white bg-green-500 px-4 py-2 rounded";
  const inactiveClassName = "text-black hover:bg-green-500 hover:text-white px-4 py-2 rounded transition duration-150 ease-in-out";

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="p-4 flex justify-between items-center bg-white shadow">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Community Lab Alliance" className="h-16 mr-2" />
          </div>
          <div className="space-x-4">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Inicio</NavLink>
            <NavLink to="/busco-soluciones" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Busco Soluciones</NavLink>
            <NavLink to="/brindo-soluciones" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Brindo Soluciones</NavLink>
            <NavLink to="/nosotros" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Nosotros</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Blog</NavLink>
            <NavLink to="/mi-perfil" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Mi perfil</NavLink>
          </div>
        </nav>
        <Routes>
         {/* <Route path="/" element={<Home />} /> */}
          <Route path="/busco-soluciones" element={<SignIn />} />
          <Route path="/brindo-soluciones" element={<BrindoSoluciones />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mi-perfil" element={<MiPerfil />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
