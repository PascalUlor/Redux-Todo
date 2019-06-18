export const loadState = () => {
    try{
        const todos = localStorage.getItem('todos');
        if(!todos) {
            return undefined;
        }
        return JSON.parse(todos);
    } catch(err) {
        return undefined;
    }
}

export const saveState = (state) =>{
    try {
        const todos = JSON.stringify(state);
        localStorage.setItem('todos', todos);
    } catch(err) {

    }
}