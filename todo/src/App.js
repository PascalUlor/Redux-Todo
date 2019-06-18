import React from 'react';
import styled from 'styled-components';
import TodoList from './component/TodoList';

const Container = styled.div`
margin: 0 auto;
text-align: center;
`;

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
