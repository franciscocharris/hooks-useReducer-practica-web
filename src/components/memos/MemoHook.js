import React, { useMemo, useState } from 'react'
import { useCouter } from '../../hooks/useCouter'

export const MemoHook = () => {

    const {counter, increment} = useCouter(10);
    const [show, setShow] = useState(true);

    const ProcesoPesado = (iteraciones) =>{

        for (let i = 0; i < iteraciones; i++) {
            console.log('hola');
        }

        return `${iteraciones} iteraciones `;
    }

    // cuando algo cambia en el html, no nesesariamente hay que renderizar todo el componente,
    // useMemo ayuda a memorizar un valor, y se pone una dependencia para saber si eso cambia, entonces
    // hay que procesar todo denuevo
    const mpp = useMemo(() => ProcesoPesado(counter), [counter]);
    return (
        <div>
            <h1> Counter <small>{counter}</small> </h1>
            <hr/>

            <p>{mpp}</p>

            <button className='btn btn-warning' onClick={increment} > +1 </button>
            {/* los boolean no se pueden mostrar en el dom con js */}
            {/* se tiene que usarel callback, porque si no, hara un bocle infinito de renders */}
            <button className='btn btn-outline-warning' onClick={ () => {
                setShow(!show)
            } } >
                show/hide {JSON.stringify(show)}
                </button>
        </div>
    )
}
