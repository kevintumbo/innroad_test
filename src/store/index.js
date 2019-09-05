import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  { bucketlist }  from '../redux/reducers';

const rootReducer = combineReducers({
    bucketlist
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__   || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);
