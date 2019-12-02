import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer.js';

export const store = createStore(reducer, applyMiddleware(logger));