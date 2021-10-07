import React, { useEffect, useReducer } from 'react'
import { ToDoAdd } from './ToDoAdd';
import { ToDoList } from './ToDoList';
import { todoReducer } from './todoReducer';

export const ToDoApp = () => {

    // init se manda a llamar
    const init = () => {
        // convertir el string a objetos, si es null, devuelve un array vacio
       return JSON.parse(localStorage.getItem('todos')) || [];
    }

    // todos es el state, el primer argumento es la funcion que hara las acciones, el segundo, en el state
    // inicial, que esta definido arriba, dispatch, es una func que manda la accion al reducer

    // init es una funcion que se ejecuta primero
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    
    useEffect( () => {
        //  el localStorage solo guarda strings
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos]);

    const handleDelete = (id) =>{
        console.log(id);

        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        });
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo 
        });
    }

    

    return (
        <div>
            <h1>ToDoApp ({todos.length}) </h1>
            <hr />

            <div className='row'>

                <ToDoAdd handleAdd={handleAdd} />
                
                {/* los parametros se envian como objetos */}
                <ToDoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}  />

                
            </div>
        </div>
    )
}


// https://www.encuentrospasionales.co/chat/?conversationId=list
// mwykqmkwavolqxkgzz@adfskj.com chupamelaa