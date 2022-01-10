import {combineReducers} from 'redux';
import extraReducer from './extraReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  extraReducer: extraReducer,
});
export default rootReducer;
