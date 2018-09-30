import React from 'react';
import './todo.css';

const TodoItem = ({todo})=> {
  return (
  <div className='todo-text'>{todo}</div>
)
}

export default TodoItem;
