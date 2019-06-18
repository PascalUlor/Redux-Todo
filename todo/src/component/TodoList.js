import React from 'react';
import { connect } from 'react-redux';
import { addTODO } from '../actions/actionCreators';

class TodoList extends React.Component{

  render() {
    console.log('=====',this.props)
    return (
      <div className="App">
        {this.props.todos.map(todo=>{
          return <div>
          <p>{todo.values}</p>
          <p>{todo.completed}</p>
          </div>
        })}
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
