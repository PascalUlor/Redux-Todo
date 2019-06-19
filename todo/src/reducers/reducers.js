import uuid from 'uuid';
import * as types from '../actions/actinoTypes';

const initialState = [{id:uuid(), values: 'code', completed: false},
                     {id:uuid(), values: 'debug', completed: false},
                     {id:uuid(), values: 'project', completed: false}]

export const todoReducer = (state= initialState, action)=>{
switch(action.type) {
    case types.ADD_TODO:
        return [...state, action.payload];
    case types.TOGGLE:
            return state.map(todo => {
                if (todo.id === action.payload && todo.completed === false) {
                  return { ...todo, completed: true };
                } else if(todo.id === action.payload && todo.completed === true) {
                    return { ...todo, completed: false };
                }
                return todo;
              });
    case types.DELETE_TODO:
        return state.filter(todo=> todo.id !== action.payload)
    default:
        return state;
}
}
