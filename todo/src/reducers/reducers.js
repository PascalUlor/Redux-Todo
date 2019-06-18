import * as types from '../actions/actinoTypes';

export const todoReducer = (state= [], action)=>{
switch(action.type) {
    case types.ADD_TODO:
        return [...state, action.payload];
    case types.MARK_DONE:
            return state.map(todo => {
                if (todo.id === action.payload) {
                  return { ...todo, completed: true };
                }
                return todo;
              });
    default:
        return state;
}
}
