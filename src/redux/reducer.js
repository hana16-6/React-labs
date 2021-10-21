import { todoReducer } from './todo';
import { combineReducers } from "redux";
import { counterReducer } from './counter';

export const rootReducers = combineReducers({
    todoReducer,
    counterReducer
})