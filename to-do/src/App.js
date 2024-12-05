import { Component } from "react";
import './App.css';
import ToDo from "./todo";
class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: 'Do the dishes', isCompleted: false},
        {description: 'Code for 4 hours', isCompleted: false},
        {description: 'Go to the library', isCompleted: false},
        {description: 'Make the bed', isCompleted: false}
      ],
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

  render() {
    return (
      <div className="App">
      <ul>
        { this.state.todos.map( (todo, index) =>
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteToDo={ () => this.deleteToDo(index) } /> )}
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