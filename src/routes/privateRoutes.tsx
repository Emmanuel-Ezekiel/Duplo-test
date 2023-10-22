import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getAllUsers } from "../utils/helpers";

const PrivateRoutes: any = () => {
  const { admin, currentUser } = useAuth();
  const { joinedObj } = getAllUsers();

  const filteredEmail = joinedObj?.find(
    (item: any) => item?.email === currentUser?.email
  );

  const role = joinedObj?.find(
    (item: any) => item?.email === filteredEmail?.email
  )?.role;

  if (filteredEmail) {
    return role === "hr" ? (
      <Navigate to="/dashboard" />
    ) : (
      <Navigate to="/denied" />
    );
  } else {
    // currentUser.email is not equal to the filtered email
    if (admin) {
      // Check if the user is logged in
      return !admin?.isAdmin ? <Outlet /> : <Navigate to="/login" />;
    } else {
      // The user is not logged in
      return <Navigate to="/login" />;
    }
  }
};

export default PrivateRoutes;
