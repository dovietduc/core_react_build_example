import React from 'react';
import Button from './Button';
import CounterShow from './CounterShow';
import ButtonDecrement from './ButtonDecrement';

function Counter() {
    return (
        <div>
            <CounterShow/>
            <div>
                <Button/>
                <ButtonDecrement/>
            </div>
        </div>
    );
}

export default Counter;
