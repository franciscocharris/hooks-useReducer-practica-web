import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const {counter1, counter2} = state;

    return (
        <>
            <h1>{counter1}</h1>
            <h1>{counter2}</h1>
            <hr/>

            <button 
                className='btn btn-primary' 
                onClick={ () => {
                    // con el useState, uno redefine el valor, con el spread operator uno puede mantener 
                    // los valores viejos y sobrescribir el que uno desea
                    setState({
                        ...state,
                        counter1: counter1 + 1,
                    })
                }}
            >
                +1
            </button>
        </>
    )
}
