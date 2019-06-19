import uuid from 'uuid';
import { ADD_TODO, TOGGLE, DELETE_TODO } from './actinoTypes';

export const addTODO = todo =>{
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
    return {// action
        type: TOGGLE,
        payload: id
    }
}

export const deleteTodo = id => {
    return {// action
        type: DELETE_TODO,
        payload: id
    }
}