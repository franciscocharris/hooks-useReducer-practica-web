import React, { useState } from 'react'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            <button className='btn btn-primary mb-5' onClick={() => {
                setShow(!show);
            }}>
                show/hide
            </button>
            {/* expressioin js */}
            {show && <MultipleCustomHooks/>}
        </div>
    )
}
