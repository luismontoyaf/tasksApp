import React, { useState, useEffect } from 'react';
import { getTareas, createTarea } from '../../services/apiService';
import './Tasks.css'; // Importa el archivo de estilos

const Tasks = () => {
    const [tareas, setTareas] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTareas();
    }, []);

    const fetchTareas = async () => {
        try {
            const response = await getTareas();
            setTareas(response.data);
        } catch (error) {
            console.error('Error al obtener las tareas:', error);
        }
    };

    const handleCreateTarea = async (e) => {
        e.preventDefault();
        try {
            const nuevaTarea = { titulo, descripcion, completada: false };
            await createTarea(nuevaTarea);
            setMessage('Tarea creada exitosamente');
            fetchTareas();
            setTitulo('');
            setDescripcion('');
        } catch (error) {
            setMessage('Error al crear la tarea');
            console.error('Error al crear la tarea:', error);
        }
    };

    return (
        <div className="tareas-container">
            <h2>Lista de Tareas</h2>
            {message && <p className="message">{message}</p>}

            <form className="task-form" onSubmit={handleCreateTarea}>
                <input 
                    type="text" 
                    value={titulo} 
                    onChange={(e) => setTitulo(e.target.value)} 
                    placeholder="Título de la tarea" 
                    required 
                />
                <textarea 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)} 
                    placeholder="Descripción de la tarea" 
                    required 
                />
                <button type="submit">Agregar Tarea</button>
            </form>

            <ul className="task-list">
                {tareas.map(tarea => (
                    <li key={tarea.id} className={`task-item ${tarea.completada ? 'completed' : ''}`}>
                        <h3>{tarea.titulo}</h3>
                        <p>{tarea.descripcion}</p>
                        <p className="status">Estado: {tarea.completada ? 'Completada' : 'Pendiente'}</p>
                        <p className="date">Creada: {new Date(tarea.fechaCreacion).toLocaleDateString()}</p>
                        <button className="delete-button">Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
