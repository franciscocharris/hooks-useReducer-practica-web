import React from 'react'

// toca memorizar, para que no se renderize si no cambia algo en el argumento
// se hace destructuracion, porque al pasarlo en el componente, con esas llaves, enseguida es un objeto
export const ShowIncrement = React.memo(({increment}) => {

    console.log('hola');
    return (
        <div>
            <button
            className='btn btn-primary'
                onClick={() =>{
                    increment();
                }}
            >
                +1
            </button>
        </div>
    )
})
