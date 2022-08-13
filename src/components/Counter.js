import React from 'react';
import Button from './Button';
import CounterShow from './CounterShow';
import ButtonDecrement from './ButtonDecrement';

function Counter({callbackForceRender}) {
    return (
        <div>
            <CounterShow/>
            <div>
                <Button callbackForceRender={callbackForceRender}/>
                <ButtonDecrement callbackForceRender={callbackForceRender}/>
            </div>
        </div>
    );
}

export default Counter;
