import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducerCounter } from './reducers';
import Counter from './Counter';

export default function ReduxWithHooks() {
    const store = createStore(reducerCounter);
    return <>
        <Provider store={store}>
            <Counter />
        </Provider>
    </>
}