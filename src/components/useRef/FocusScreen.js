import React, { useRef } from 'react'

export const FocusScreen = () => {

    // useRef sirve para mantener la referencia de una variable, o un html o algo, sin 
    // tener quie renderizar el componente
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>

            <input className='form-control' ref={inputRef}  name='name' type='text' placeholder='su nombre' />
            <button
                onClick={handleClick}
                className=' d-block btn btn-outline-primary mt-5' >boton</button>
        </div>
    )
}
