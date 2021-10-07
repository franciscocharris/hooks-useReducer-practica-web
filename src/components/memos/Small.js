import React from 'react'

// memo es una funcion que devuelve memorizada la renderizacion de un componente, y solo vuelve 
// a renderizar cuamdo sus properties(propiedades) cambian
export const Small = React.memo(({value}) => {

    console.log('mostrado otra vez');

    return (
        <div>
            <small> {value} </small>
        </div>
    )
}
)