import React from 'react';
import { connect } from 'react-redux';
import { addTODO } from '../actions/actionCreators';

class TodoList extends React.Component{

    state = {
        newTodo: ''
    };

    addTODO = e => {
        e.preventDefault();
        this.props.addTODO(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    handleChanges = e => this.setState({ newTodo: e.target.value });


  render() {
    console.log('=====',this.props)
    return (
      <div className="App">
      <h1>Todo List</h1>
        {this.props.todos.map(todo=>{
          return <div>
          <p>{todo.values}</p>
          <p>{todo.completed}</p>
          </div>
        })}
        <form onSubmit={this.addTODO}>
        <input 
              onChange={this.handleChanges}
              value={this.state.newTodo}
              />
              <button>Add Todo</button>
        </form>
      </div>
    );
  }
  
}

// export default App;
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { addTODO }
)(TodoList);
