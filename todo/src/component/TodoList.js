import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTODO } from '../actions/actionCreators';

const Container = styled.div`
margin: 0 auto;
`;

const Header = styled.div`
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
  font-family: "Lobster", cursive;
  font-size: 2rem;
  font-weight: lighter;
  padding: 0 0 0 1rem;
  margin: 0 0 3rem 0;
`;

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
      <Container>
      <Header>Todo List</Header>
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
      </Container>
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
