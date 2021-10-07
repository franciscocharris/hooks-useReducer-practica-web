import React from 'react'
import { useCouter } from '../../hooks/useCouter';

export const CounterWithCustomHook = () => {

    const n = 10;
    const {state, increment, decrement, reset} = useCouter(n);


    return (
        <>
            <h1>Counter with hook: {state}</h1>
            <hr/>

            <button onClick={ () => increment(1) } className='btn btn-primary'>+1</button>
            <button onClick={ () => reset() } className='btn btn-primary'>reset</button>
            <button onClick={ () => decrement(1) } className='btn btn-danger'>-1</button>
        </>
    )
}
