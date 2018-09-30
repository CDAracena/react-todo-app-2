import React from 'react';
import './todo.css';
import TodoItem from './TodoItem'


const TodoList = ({todos, remove})=> {
  return (
    <div className="todo-list-container">
      {todos.map(todo => <li key={todo.id} className="todo-card"> <TodoItem todo={todo.text}/> <div className="btn-section"><button onClick={()=> remove(todo)} className="delete-btn"> Delete </button></div> </li>)}
    </div>
  )
}


export default TodoList;
