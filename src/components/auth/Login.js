import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/apiService'; 
import './Auth.css';  

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({ Correo: email, Contraseña: password }); // Cambia 'email' y 'password' a 'Correo' y 'Contraseña'
            console.log('Inicio de sesión exitoso');
            navigate('/tasks');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Iniciar Sesión</button>
                </form>
                <p className="register-link">
                    ¿No tienes una cuenta?{' '}
                    <span onClick={() => navigate('/register')}>Regístrate aquí</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
