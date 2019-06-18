import React from 'react';

const Form = ({ todoInput, handleChanges, addTODO, searchQuery, deleteHandler, formType }) =>{
    return (
        <div>
            <form onSubmit={addTODO}>
        <input 
              onChange={handleChanges}
              value={todoInput}
              />
              <button>Add Todo</button>
        </form>
        </div>
    )
}

export default Form;