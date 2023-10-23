import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getAllUsers } from "../utils/helpers";

const PrivateRoutes = () => {
  const { admin, currentUser } = useAuth(); // Get the admin and currentUser values from the authentication context
  const { joinedObj } = getAllUsers(); // Retrieve the joinedObj data containing information about all users

  const filteredEmail = joinedObj?.find((item: any) => item?.email === currentUser?.email);
  // Find the user's email in the joinedObj array and assign the matching object to filteredEmail

  const role = joinedObj?.find((item: any) => item?.email === filteredEmail?.email)?.role;
  // Find the user's role in the joinedObj array and assign the role value to the role variable

  if (filteredEmail) {
    // If the user's email was found in the joinedObj array
    return role === "hr" ? (
      <Navigate to="/dashboard" />
    ) : (
      <Navigate to="/denied" />
    );
  } else {
    // If the user's email was not found in the joinedObj array
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

