import { ADD_TODO } from './actinoTypes';

export const addTODO = todo =>{
    console.log(todo)
    return {// action
        type: ADD_TODO,
        payload: todo
    }
}