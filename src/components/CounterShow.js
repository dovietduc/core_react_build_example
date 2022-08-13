import React from 'react';
import {Store} from '../Store/Store';


function CounterShow() {
    return (
        <h2>Counter {Store.state.counter}</h2>
    )
}

export default CounterShow