import React from 'react'

export const ToDoListItem = ({todo, i, handleDelete, handleToggle}) => {
    return (
        <li
            key={todo.id}
            className='list-group-item'
        >
            <p
                // sino se se hace con arrow function, se jecuta todo de una
                // en este caso hay que hacerlo para enviar parametros
                onClick={() => handleToggle(todo.id)}
                className={` ${todo.done && 'complete'} `}
            >
                {i + 1}. {todo.desc}
            </p>
            <button
                className='btn btn-danger'
                // sino se se hace con arrow function, se jecuta todo de una
                // en este caso hay que hacerlo para enviar parametros
                onClick={() => handleDelete(todo.id)}
            >
                borrar
            </button>
        </li>
    )
}
