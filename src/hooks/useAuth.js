import { useSelector } from 'react-redux';
import { selectCurrentToken } from "../features/auth/authSlice";
// import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  // console.log(token.data.accessToken)

  if (token) {
    // const decoded = jwtDecode(token);
    const { id: userId, email, username } = token.data.user;
    // console.log(decoded.UserInfo);
    // const name = `${fname} ${lname}`;

    // isManager = roles.includes('Manager');
    // isAdmin = roles.includes('Admin');

    // if (isManager) status = "Manager";
    // if (isAdmin) status = "Admin";

    return { userId, email, username };
  }

  return { email: '', username: '' };
};
export default useAuth;