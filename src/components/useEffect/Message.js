import React, { useEffect } from 'react'

export const Message = () => {

    const mouseMove = () => {
        console.log('XD');
    }
    // apenas el componente se renderize o aparezca, se ejecuta
    useEffect(() => {
        // cuerpo del effect
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            // console.log('limpieza o desmonte del componente');
        }
    }, []);

    return (
        <>
            <h3>eres genial</h3>
        </>
    )
}
