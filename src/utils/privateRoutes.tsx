import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes: React.FC = () => {
  let auth = { token: true}; // Replace with your authentication logic

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
