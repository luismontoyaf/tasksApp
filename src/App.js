import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Tareas from './components/auth/Tasks';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} /> {/* Redirección a login */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tasks" element={<Tareas />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
