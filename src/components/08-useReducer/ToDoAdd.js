import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({handleAdd}) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // validacion por si esta vacio el campo
        if(description.trim().length <= 1){
            // no hagas nada
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAdd(newTodo);
        reset();

    }

    return (
        <div className='col-md-5'>
            <h4>Agregar Tarea</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type='text '
                    name='description'
                    placeholder='aprender'
                    className='form-control'
                    onChange={handleInputChange}
                    value={description}
                />

                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block w-100'
                >
                    Agregar
                </button>
            </form>
        </div>
    )
}
