import React, { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = state;
    // el evento se pasa solo
    const handleInputChange = ({target}) => {
        // console.log(target.value);
        setState({
            ...state,
            [target.name] : target.value
        });
    }

    // // array vacio como segundo parametro para que se ejecute una vez
    // useEffect( () => {
    //     console.log('hey');
    // }, [] );

    // // se puede utilizar cuamdo cambie el state del componente
    // useEffect(() => {
    //     console.log('el estado cambio, osea, el name o el email');
    // }, [state]);

    // // o quie cambie solo algo mas especifico
    // useEffect(() => {
    //     console.log(`el name`);
    // }, [name]);

    

    return (
        <>
           <h1>useEffect</h1> 
           <hr/>

           <input 
            type='text' name='name' className='form-control mb-2' placeholder='tu nombre' 
            value={name} onChange={ handleInputChange }
           />
           <input 
            type='email' name='email' className='form-control' placeholder='tu correo' 
            value={email} onChange={ handleInputChange }
           />
           

        {/* mostrar el conmponente de manera condicional */}
           { name === '123' && <Message /> }
        </>
    )
}
