import React, { useState } from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(todo.id, { ...todo, title: editTitle });
        }
        setIsEditing(!isEditing);
    };

    return (
        <li>
            {isEditing ? (
                <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
            ) : (
                <span>{todo.title}</span>
            )}
            <button onClick={handleEdit}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;


