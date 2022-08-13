import React from 'react';
import {Store} from '../Store/Store';

function ButtonDecrement({callbackForceRender}) {

    const handleDecrement = () => {
        // thay đổi state trên store
        Store.decrement();
        // force app render
        callbackForceRender();
    }

    return (
        <button onClick={handleDecrement}>
            Decrement
        </button>
    )
}

export default ButtonDecrement