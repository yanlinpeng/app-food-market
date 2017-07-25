import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import { initializeBlockchain } from '../actions/InitializeAction.js';
import transactionsStatus from './TransactionsStatusReducer.js';
import {initWeb3, initAmbrosus} from './InitializeReducer.js';
import market from './MarketReducer.js';


const store = createStore(combineReducers({
        transactionsStatus,
        ambrosus: initAmbrosus,
        market
    }),
    applyMiddleware(thunkMiddleware));

store.dispatch(initializeBlockchain());

export default store;