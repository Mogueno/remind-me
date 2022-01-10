import {LOGIN} from '../../types';

export default interface UserLoginDataAction {
  accessToken: string | null;
  customData?: object;
  deviceId: string | null;
  id: string;
  isLoggedIn: boolean;
  profile: object;
  state: string;
}

export const loginAction = (loginData: UserLoginDataAction) => {
  return {type: LOGIN, payload: loginData};
};
