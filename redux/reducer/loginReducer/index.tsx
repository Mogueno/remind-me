import {LOGIN} from '../../../types';

const INITIAL_STATE = {
  accessToken: '',
  customData: {},
  deviceId: '',
  id: '',
  isLoggedIn: false,
  profile: {},
  state: '',
};

const loginReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN:
      const newState = {
        accessToken: action.payload.accessToken,
        customData: action.payload.customData,
        deviceId: action.payload.deviceId,
        id: action.payload.id,
        isLoggedIn: action.payload.isLoggedIn,
        profile: action.payload.profile,
        state: action.payload.state,
      };

      return newState;
    default:
      return state;
  }
};
export default loginReducer;
