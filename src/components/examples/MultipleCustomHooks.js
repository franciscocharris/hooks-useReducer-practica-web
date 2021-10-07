import React from 'react'
import { useCouter } from '../../hooks/useCouter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCouter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // null = null, !null = true, !!null = false
    // por consecuencia, si data es false, no va a ejecutar lo de la derecha
    // caso contrario, si es true, entonces ejecuta la derecha

    const {author, quote} = !!data && data[0];
    console.log(author, quote);
    console.log(counter);
    
    return (
        <div>
            <h1>Breaking bad</h1>
            <hr/>

            {
                loading 
                ? 
                (
                    <div className='alert alert-info text-center'>
                        loading...
                    </div>
                )
                :
                <blockquote className='blockquote text-right'>
                    {/*  esas dos llaves {}, signifian codigo de js */}
                    <p className='mb-2'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            }

            <button className='btn btn-primary' onClick={increment} >+1</button>
        </div>
    )
}
