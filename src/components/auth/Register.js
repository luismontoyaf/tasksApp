import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/apiService'; 
import './Auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState(''); 
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await register({
                Nombre: name,
                Correo: email,
                Contraseña: password,
                RolId: 1
            });
            setMessage(response.data); 
            console.log('Registro exitoso');
            navigate('/login'); 
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error desconocido";
            setMessage(errorMessage); 
            console.error('Error al registrar:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Registro</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ingresa tu nombre"
                            required
                        />
                    </div>
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
                    <button type="submit" className="auth-button">Registrarse</button>
                </form>
                {message && <p className="message">{String(message)}</p>} 
                <p className="register-link">
                    ¿Ya tienes una cuenta?{' '}
                    <span onClick={() => navigate('/login')}>Inicia sesión aquí</span>
                </p>
            </div>
        </div>
    );
};

export default Register;
