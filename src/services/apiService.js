import axios from 'axios';

const apiUrlTasks = 'http://localhost:5003/api/tareas';


export const getTareas = async () => {
    return await axios.get(apiUrlTasks); // Corrige la URL y el método
};

export const createTarea = async (tarea) => {
    return await axios.post(apiUrlTasks, tarea); // Corrige la URL
};
const apiUrlAuth = 'http://localhost:5003/api/auth';
export const register = async (usuario) => {
    console.log("usuario:" + usuario)
    return await axios.post(`${apiUrlAuth}/register`, usuario);
};

export const login = async (loginData) => {
    return await axios.post(`${apiUrlAuth}/login`, loginData);
};

