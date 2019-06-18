import uuid from 'uuid';
import { ADD_TODO, TOGGLE, DELETE_TODO } from './actinoTypes';

export const addTODO = todo =>{
    console.log(todo)
    return {// action
        type: ADD_TODO,
        payload: {
            id: uuid(),
            values: todo,
            completed: false
        }
    }
}

export const toggleTodo = id =>{
    console.log(id)
    return {// action
        type: TOGGLE,
        payload: id
    }
}

export const deleteTodo = id => {
    console.log(id)
    return {
        type: DELETE_TODO,
        payload: id
    }
}