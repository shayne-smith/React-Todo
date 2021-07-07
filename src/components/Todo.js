import React from 'react'

const Todo = props => {
    return (
        <div 
            className={`task${props.todo.completed ? ' completed' : ''}`} 
            onClick={e => props.toggleTask(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;