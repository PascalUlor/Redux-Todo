import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './reducers/reducers';
import { loadState, saveState } from './storage/storage';
import App from './App';
import * as serviceWorker from './serviceWorker';

const persistedState = loadState();

const combinedReducer = combineReducers({
    todos: todoReducer,
});

const store = createStore(combinedReducer, persistedState);

store.subscribe(()=>{
    saveState(store.getState());
});


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
