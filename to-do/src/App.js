import { Component } from "react";
import './App.css';

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
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  deleteToDo(index) {
    console.log('deleteToDo executed!')
    const todos = this.state.todos.filter( (todo => todo !== this.state.todos[index]))
    this.setState({ todos: todos });
    //This is now setting the state of the old list of todos to the new list of todos without the recently deleted one
  };

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <ToDo key={ index } description={ todo.description } deleteToDo={ () => this.deleteToDo(index) }>
            <li key={todo}>{todo}</li>
            <button onClick={this.props.deleteToDo}>delete</button>
            </>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;