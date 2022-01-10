import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer/rootReducer';
import thunk from 'redux-thunk';
import UserLoginDataAction from '../actions/loginAction';

export interface RootState {
  login: UserLoginDataAction;
}

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
