import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTODO, toggleTodo, deleteTodo} from '../actions/actionCreators';
import Todo from './Todo';
import Form from './Form';

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

    completed = (id) =>{
        this.props.toggleTodo(id)
    }

    deleteItem= (id) =>{
        this.props.deleteTodo(id)
    }

    handleChanges = e => this.setState({ newTodo: e.target.value });


  render() {
    return (
      <Container>
      <Header>Todo List</Header>
      <Form 
          addTODO={this.addTODO}
          handleChanges={this.handleChanges}
          todoInput={this.state.newTodo}

      />
        {this.props.todos.map(todo=>{
          return <div key={todo.id}>
          <Todo 
              item={todo}
              select={this.completed}
              deleteItem={this.deleteItem}
          />
          </div>
        })}
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
  { addTODO, toggleTodo, deleteTodo }
)(TodoList);
