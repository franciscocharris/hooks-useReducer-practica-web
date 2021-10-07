import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCouter } from '../../hooks/useCouter';
import { useFetch } from '../../hooks/useFetch'

export const Layout = () => {

    const [boxSize, setBoxSize] = useState();
    const {counter, increment} = useCouter(1);
    
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    // null = null, !null = true, !!null = false
    // por consecuencia, si data es false, no va a ejecutar lo de la derecha
    // caso contrario, si es true, entonces ejecuta la derecha
    
    const {quote} = !!data && data[0];
    console.log( quote);
    console.log(counter);

    // este mantiene la referencia de la etiqueta p
    const p = useRef();
    
    // esto se ejecuta cada cuando el parrafo cambie y se ambia el valor a mostrar, casi la misma vaina
    // que useREf
    useLayoutEffect(() => {
        // setBoxSize( document.querySelector('p').getBoundingClientRect() );
        setBoxSize( p.current.getBoundingClientRect() );
    }, [quote])
    
    return (
        <div>
            <h1>Breaking bad</h1>
            <hr/>

           
                <blockquote className='blockquote text-right'>
                    {/*  esas dos llaves {}, signifian codigo de js */}
                    <p ref={p} className='mb-2'>{quote}</p>
                </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            <button className='btn btn-primary' onClick={increment} >+1</button>
        </div>
    )
}
