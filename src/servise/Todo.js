import axios from 'axios';
import { API_URL } from '../constans/Api';

export const getTodos = () => axios.get(API_URL);
export const addTodo = (todo) => axios.post(API_URL, todo);
export const updateTodo = (id, todo) => axios.put(`${API_URL}/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);


