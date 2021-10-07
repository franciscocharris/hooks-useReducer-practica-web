import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = values;

    useEffect( () => {
        console.log('cambio en email');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <input
                type='text' name='name' className='form-control mb-2' placeholder='tu nombre'
                value={name} onChange={handleInputChange}
            />
            <input
                type='email' name='email' className='form-control' placeholder='tu correo'
                value={email} onChange={handleInputChange}
            />

            <input
                type='password' name='password' className='form-control' placeholder='tu contraseña'
                value={password} onChange={handleInputChange}
            />

            <button type='submit' className='btn btn-primary'>
                guardar
            </button>
        </form>
    )
}
