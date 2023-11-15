import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter() {
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch();
    return <>
        Conter {counter}
        <button onClick={() => {
            dispatch({
                type: 'increment'
            })
        }}>Incr</button>
    </>
}