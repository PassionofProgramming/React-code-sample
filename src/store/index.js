// 

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from "redux-logger"


const store = createStore(rootReducer,
    {},
    applyMiddleware(createLogger(),thunk)
);

export default store;