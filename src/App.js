import React from 'react';
import TodoList from './TodoList'
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.handleText = this.handleText.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }
  state = {
    todos: [],
    text: '',
    count: 0,
  }

  removeTodo(todo){
  const todos = this.state.todos.filter(function(index){
      return index !== todo
    })
    this.setState({todos: todos, count: this.state.count - 1})
  }

  addTodo(event){
    const date = new Date();
    const todo = {
      id: date.getTime(),
      text: this.state.text
    }
    this.setState({todos: [...this.state.todos, todo], count: this.state.count + 1}, function(){

    })
event.preventDefault();
  }

handleText(e){
  this.setState({text: e.target.value}, function(){
    console.log(this.state.text)
  })

}

  render(){
    return (
      <div className="main-container">
        <div className="count-div">
          {this.state.count} Todos
        </div>
        <input type="text" value={this.state.text} onChange={this.handleText}/> <button onClick={this.addTodo} className="add-btn"> Add </button>
        <TodoList todos={this.state.todos} remove={this.removeTodo}/>
      </div>
    )
  }
}

export default App;
