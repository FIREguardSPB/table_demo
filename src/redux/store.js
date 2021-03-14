import {createStore, applyMiddleware} from 'redux'
import dataReducer from '../redux/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export const store = createStore(dataReducer, composeWithDevTools(applyMiddleware(thunk)))