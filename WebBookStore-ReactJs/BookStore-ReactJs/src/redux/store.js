import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux'

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f  
    )
);