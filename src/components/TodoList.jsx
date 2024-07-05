import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onEdit, onDelete }) => {
    if (!todos.length) {
        return <p>No todos available.</p>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default TodoList;
