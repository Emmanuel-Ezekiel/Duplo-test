import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes: any = () => {
  const { admin } = useAuth();
 // Replace with your authentication logic
 if (admin) {
   return !admin?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
 } else {
  return <Navigate to="/login" />;
 }
 
};

export default PrivateRoutes;
