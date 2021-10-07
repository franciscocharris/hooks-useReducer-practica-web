import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from '../../helpers/ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // hay un problema, y es que cuando se pasa funciones a componentes hijos, y digamos..., algo cambia
    // se vuelve a renderizar todo(el hijo recibe un parametro,que es una funcion, lo que pasa es que 
    // como todo se renderiza, se manda la funcion literalmente nueva, otro espacio de memoria),
    //  el hijo no deberia, no este caso, ya que solo devuelve un boton que ejecuta
    // una funcion, asi que con useCallBack, se manda la funcion memorizada, y react sabra que es la misma
    // y no se vuelve a ejecutar el componente hijo, volvera a mandar una funcion nueva, cuamdo la 
    // dependencia cambie

    // useCallBack para mandar funciones memorizadas, y no renderizar cosas inutiles
    const increment = useCallback(
        () => {
            //  al parecer, los setAlgo, tienen y saben quien es su valor, asi si "se recibe como parametro"
            // se itera y basicamnete sacamos su valor y ya asi podemos modificarlo
            setCounter(c => c + 1);
        },
        [setCounter],
    );

    useEffect(() => {
        // algun codigo
        
        // tambien es un caso de uso en los useEffect, si la dependemcia es esa funcion, asi, se tiene
        // memorizada la funcion y nose vuelve a ejecutar otra vez el useEffect
    }, [increment])

    return (
        <div>
            <h1>useCallBack hooks {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} />
        </div>
    )
}
