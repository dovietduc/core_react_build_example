import React from 'react';
import {Store} from '../Store/Store';

function Button({callbackForceRender}) {

    const handleIncrement = () => {
        Store.increment();

        // force app re-render
        callbackForceRender();
    }

    return (
        <button onClick={handleIncrement}>
            Increment
        </button>
    )
    
}

export default Button