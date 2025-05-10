// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

function useUserInfo() {
  const userInfo = useSelector((state: RootState) => state.auth);
  return userInfo;
}

export default useUserInfo;
