import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import rootreducer from './services/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootreducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
) 

export default store;