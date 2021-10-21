import { createStore } from 'redux';
import { rootReducers } from './reducer';

export const store = createStore(rootReducers)