import { Component, useState } from "react";
import './App.css';
import ToDo from "./todo";
class ClassInput extends Component {
  constructor(props) {

    super(props);
    this.state = {
      count: 0,
      value: "",
      editing: false,
      currentid: "",
      currentValue: "",
      todos: [
        {description: 'Do the dishes', isCompleted: false, count: this.count + 1},
        {description: 'Code for 4 hours', isCompleted: false},
        {description: 'Go to the library', isCompleted: false},
        {description: 'Make the bed', isCompleted: false}
      ],
      // length: this.todos.length,
      newTodoDescription: ''
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value });
    // this.setState((state) => ({
    //   ...state,
    //   inputVal: e.target.value,
    // }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
   this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos })
  }
  deleteToDo(index) {
    console.log('deleteToDo executed!')
    const todos = this.state.todos.filter( (todo => todo !== this.state.todos[index]))
    this.setState({ todos: todos });
    //This is now setting the state of the old list of todos to the new list of todos without the recently deleted one
  };
  onEditTodo = (id, newValue) => {
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newValue;
      }
    });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();
    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  }
  onToggleEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };
  // countTodos(todos) {
  //   console.log(`Counting todos...`)
  //   const countThem = this.setState({count: this.state.count + 1})
  //   this.setState({ count: countThem })
  //   console.log(`${todo.count}`);
  // }

  render() {
    const mylist = this.state.todos.map((todo) => {
      <li className="todo_item">
        {todo.name}

        <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
        <button onClick={() => this.deleteToDo(todo.id)}>Remove</button>
      </li>
    });

    return (
      <>
      <div className="App">
        {this.state.editing === false ? (
          <form onSubmit={ (e) => this.handleSubmit }>
          <input type="text"  
          value={ this.state.newTodoDescription } 
          onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
        </form>
        ) : (
<form onSubmit={ (e) => this.onSubmitEditTodo}>
          <input type="text"  
          value={ this.state.newTodoDescription } 
          onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
          </form>
        )}
        

        {/* {this.state.editing === false ? (
          <form onSubmit={this.handleSubmit}>
            <input 
              placeholder="type task"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        ) : (
          <form onSubmit={this.onSubmitEditTodo}>
            <input 
              placeholder="edit task"
              name={this.state.currentValue}
              onChange={this.onEditInputChange}
            />
            <button onClick={this.onSubmitEditTodo}>Update Item</button>
          </form>
        )}

        <ul className="todo_wrapper">todosss</ul> */}
<ul>todos</ul>
{/* 
      <ul>
         { this.state.todos.map( (todo, index) =>
        <ToDo key={ index }description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteToDo={ () => this.deleteToDo(index) } /> )}
      </ul> */}
        
       
      </div>
      </>
    );
  }
}

export default ClassInput;