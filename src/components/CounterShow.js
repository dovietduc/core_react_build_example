import React from 'react'

function CounterShow(props) {
    const {counter} = props;
    return (
        <h2>Counter {counter}</h2>
    )
}

export default CounterShow