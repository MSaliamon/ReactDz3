import React, { useState } from 'react';
import useTodos from '../hooks/UseTodos';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
    const { todos, loading, error, addNewTodo, editTodo, removeTodo } = useTodos();
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sort === 'asc') {
            return a.title.localeCompare(b.title);
        } else if (sort === 'desc') {
            return b.title.localeCompare(a.title);
        }
        return 0;
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Filter todos"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <select onChange={(e) => setSort(e.target.value)} value={sort}>
                <option value="">Sort by</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <AddTodo onAdd={addNewTodo} />
            <TodoList todos={sortedTodos} onEdit={editTodo} onDelete={removeTodo} />
        </div>
    );
};

export default App;

