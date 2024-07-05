import { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../servise/Todo';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await getTodos();
                setTodos(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const addNewTodo = async (title) => {
        try {
            const response = await addTodo({
                title,
                completed: false
            });
            setTodos([...todos, response.data]);
        } catch (error) {
            setError(error);
        }
    };

    const editTodo = async (id, updatedTodo) => {
        try {
            const response = await updateTodo(id, updatedTodo);
            setTodos(todos.map(todo => todo.id === id ? response.data : todo));
        } catch (error) {
            setError(error);
        }
    };

    const removeTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            setError(error);
        }
    };

    return { todos, loading, error, addNewTodo, editTodo, removeTodo };
};

export default useTodos;

