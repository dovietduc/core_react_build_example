import React, {useContext} from 'react';
import {Store} from '../Store/Store';
import {ForceRenderContext} from '../App';

function Button() {

    const forceRenderStore = useContext(ForceRenderContext);

    console.log('forceRenderStore', forceRenderStore);



    const handleIncrement = () => {
        Store.increment();

        // force app re-render
        forceRenderStore.callbackForceRender();

    }

    return (
        <button onClick={handleIncrement}>
            Increment
        </button>
    )
    
}

export default Button