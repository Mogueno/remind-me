import {Action} from 'redux';
import {INCREMENT} from '../../../types';

const INITIAL_STATE = {
  counter: 0,
};

const extraReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return (state.counter += 1);
    default:
      return state;
  }
};
export default extraReducer;
