import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/users';

function Logout() {
  localStorage.removeItem('userInfo');
  // localStorage.removeItem('accessToken');
  logout();
  window.location = '/login';
}

export default Logout;
