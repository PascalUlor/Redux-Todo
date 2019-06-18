import React from 'react';


const Todo = ({ item, select, deleteItem }) => {
    const validation = item.completed ? { textDecoration: 'line-through' } : { fontWeight: 'bold' }
    return (
        <div>
<p className="todo__text" onClick={() => select(item.id)} style={validation} key={item.id}>
            {item.values}
            {item.completed}
        </p>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
        
    );
}

export default Todo;