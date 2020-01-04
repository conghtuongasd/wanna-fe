import { createStore, applyMiddleware, compose } from "redux";
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(
    middlewareEnhancer
)

const store = createStore(reducers, { Intl: { locale: 'en' } }, composedEnhancers);

export default store;