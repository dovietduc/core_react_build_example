import React, {useContext} from 'react';
import {Store} from '../Store/Store';
import {ForceRenderContext} from '../App';

function ButtonDecrement() {

    const forceRenderStore = useContext(ForceRenderContext);

    const handleDecrement = () => {
        // thay đổi state trên store
        Store.decrement();

        // force app re-render
        forceRenderStore.callbackForceRender();
      
    }

    return (
        <button onClick={handleDecrement}>
            Decrement
        </button>
    )
}

export default ButtonDecrement