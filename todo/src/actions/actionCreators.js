import uuid from 'uuid';
import { ADD_TODO, MARK_DONE } from './actinoTypes';

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

export const markDONE = id =>{
    console.log(id)
    return {// action
        type: MARK_DONE,
        payload: id
    }
}