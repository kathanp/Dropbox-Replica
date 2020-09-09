import {createStore , applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import _reducer from './reducers/dataReducer'



const middleware = applyMiddleware(promise() , thunk , logger());


export default createStore(_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware);