import React from 'react';
import { Provider } from "react-redux";
import { store } from './store'; 
import Counter from './Counter';


export function SimpleReduxWrapper() {

    return (
        <Provider store={store}>
           <Counter/>
        </Provider>
    )
}