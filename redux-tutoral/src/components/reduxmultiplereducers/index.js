import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { appleReducers, bananaReducers } from './multipleReducers'
import { DECREMENT_APPLE, DECREMENT_BANANA, INCREMENT_APPLE, INCREMENT_BANANA } from './actions'

export default function ReduxWithMultipleReducers() {
    const rootReducers = combineReducers({
        apple: appleReducers,
        banana: bananaReducers
    })
    const store = createStore(rootReducers)
    return <>
        <Provider store={store}>
            <Counter />
        </Provider>
    </>
}


export const Counter = () => {
    return <>
        <AppleCounter /><br />
        <BananaCounter />
    </>
}



export const AppleCounter = () => {
    let { appleCount, dispatch } = useReduxLayer();
    return <>
        No of Apples: {appleCount?.appleCount} <br />
        <button onClick={() => {
            dispatch({ type: INCREMENT_APPLE })
        }}>increment Apple count</button>
        <button onClick={() => {
            dispatch({ type: DECREMENT_APPLE })
        }}>Decrement Apple count</button><br />
    </>
}

export const BananaCounter = () => {
    let { bananaCount, dispatch } = useReduxLayer();
    return <>
        No of banana: {bananaCount?.bananaCount} <br />
        <button onClick={() => {
            dispatch({ type: INCREMENT_BANANA })
        }}>increment banana count</button>
        <button onClick={() => {
            dispatch({ type: DECREMENT_BANANA })
        }}>Decrement banana count</button><br />
    </>
}


export function useReduxLayer() {
    const appleCount = useSelector(state => state?.apple);
    const bananaCount = useSelector(state => state?.banana);
    const dispatch = useDispatch();
    if (appleCount === undefined || bananaCount === undefined) {
        throw Error("Redux Error");
    }
    return {
        appleCount, bananaCount, dispatch
    }
}