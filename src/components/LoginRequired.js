import React from 'react';
import { Navigate } from 'react-router-dom';

export default function LoginRequired({ user, children }) {

  return user.token ? children : <Navigate to='/login'/>
}
