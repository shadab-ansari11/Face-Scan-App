/**
 * @format
 */
import jwtDecode from 'jwt-decode';
import {useSelector} from 'react-redux';
import {IUserState} from '../redux/auth/authSlice';
import {RootState} from '../redux/store';

function useDecodedData(): any {
  const userInfo: IUserState = useSelector((state: RootState) => state.auth);
  const token = userInfo?.userInfo;
  const decoded = jwtDecode(token);

  return decoded;
}

export default useDecodedData;
