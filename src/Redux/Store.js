import {applyMiddleware, combineReducers,createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MultiStepFormReducer,LoginUser } from './Reducers/LoginFormReducer';

const rootReducer = combineReducers({
  steps: MultiStepFormReducer,
  auth:LoginUser

 })

let initialState={}

export const store=createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(thunk)))