import React, { useState } from 'react'
import { useCouter } from '../../hooks/useCouter'
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCouter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1> Counter <Small value={counter} /> </h1>
            <hr/>

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
