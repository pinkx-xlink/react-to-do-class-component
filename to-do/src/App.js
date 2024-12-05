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
  // countTodos(todos) {
  //   console.log(`Counting todos...`)
  //   const countThem = this.setState({count: this.state.count + 1})
  //   this.setState({ count: countThem })
  //   console.log(`${todo.count}`);
  // }

  render() {
    return (
      <div className="App">
      <ul>
        
        { this.state.todos.map( (todo, index) =>
        <ToDo key={ index }description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteToDo={ () => this.deleteToDo(index) } /> )}
      </ul>
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text"  value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) }/>
        <input type="submit" />
      </form> 
      
      </div>
      
    );
  }
}

export default ClassInput;