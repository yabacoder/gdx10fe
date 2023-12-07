import React from 'react';
import { Redirect } from 'react-router-dom';
import { logOut } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

function Logout() {
  const dispatch = useDispatch(); 

  // localStorage.removeItem('userInfo');
  // localStorage.removeItem('accessToken');
  // logout();
  dispatch(logOut());
  window.location = '/login';
}

export default Logout;
