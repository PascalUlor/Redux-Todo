import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 1rem auto;
width: 30%;
height: 3rem;
background-color: skyblue;
`;


const Todo = ({ item, select, deleteItem }) => {
    const validation = item.completed ? { textDecoration: 'line-through' } : { fontWeight: 'bold' }
    return (
        <Container>
<p className="todo__text" onClick={() => select(item.id)} style={validation} key={item.id}>
            {item.values}
            {item.completed}
        </p>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        </Container>
        
    );
}

export default Todo;