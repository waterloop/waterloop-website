import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const state = createStore(reducer, composeWithDevTools());

export type ReduxState = ReturnType<typeof state.getState>;

export default state;
