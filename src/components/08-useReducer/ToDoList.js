import React from 'react'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <div className='col-md-7'>
            <ul className='list-group list-group-flush' >
                {
                    // cuando es arreglo es con parentesis no con llaves
                    todos.map((todo, i) => (
                        <ToDoListItem 
                            key={todo.id} 
                            todo={todo} i={i} 
                            handleDelete={handleDelete} 
                            handleToggle={handleToggle} 
                        />
                    ))
                }
            </ul>
        </div>

    )
}

// ToDoList.proptypes = {
//     todos: Proptype.array
// }
