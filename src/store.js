import { createStore } from 'redux';
import reducers from './reducers.js';

const initialState = {
};

const store = createStore(reducers, initialState);
export default store;