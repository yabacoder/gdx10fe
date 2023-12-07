import { useSelector } from 'react-redux';
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from 'jwt-decode';

const useAuth = () => {
  const tokens = useSelector(selectCurrentToken);
  // console.log(token, "Token");

  if (tokens) {
    const decoded = jwtDecode(tokens.accessToken);
    // const { profile, user, accessToken } = decoded.accessToken; //token.data;
    const token = tokens.accessToken;
    const { userId, roleId, email, username, cv, bio } = decoded.UserInfo;
    // console.log(decoded.UserInfo);

    return { userId, email, roleId, username, token, cv, bio }; 
  }

  return { email: '', username: '' };
};
export default useAuth;