import {createSlice} from '@reduxjs/toolkit';

export interface IUserState {
  userInfo: string;
  token: string;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  userInfo: '',
  token: '',
  isLoggedIn: false,
};

interface IPayload {
  isLoggedIn: boolean;
  token: string;
  userInfo: string;
}

interface IAction {
  payload: IPayload;
  type: string;
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: IAction) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state: any) => {
      state.userInfo = '';
      state.token = '';
      state.isLoggedIn = false;
    },
  },
});

export const {login, logout} = AuthSlice.actions;

export default AuthSlice.reducer;
