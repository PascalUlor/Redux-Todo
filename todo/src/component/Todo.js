import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
margin: 1rem auto;
width: 30%;
height: 3rem;
background-color: skyblue;
padding: .5rem;
`;

const Slide = styled.span`
input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 100px;
	height: 40px;
	background: grey;
	display: inline-block;
	border-radius: 100px;
    position: relative;

    &:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width: 30px;
	height: 30px;
	background: #fff;
	border-radius: 100%;
	transition: 0.3s;
}
    &:active:after {
	width: 30px;
}
}

input:checked + label {
	background: #bada55;
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}
  `;


const Todo = ({ item, select, deleteItem }) => {
    return (
        <Container>
    <Slide onClick={() => select(item.id)}>  
    <input type="checkbox" id={item.values} /><label htmlFor={item.values}>{item.values}</label>
    </Slide>
        <p className="todo__text" key={item.id}>
            {item.values}
            {item.completed}
        </p>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        </Container>
        
    );
}

export default Todo;