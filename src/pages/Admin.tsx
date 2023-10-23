import React, { useState } from "react";
import { Button, Card, Alert, Container } from "react-bootstrap";
import { updateUserRole } from "../services/createCollections";
import { Link } from "react-router-dom";
import { getAllUsers } from "../utils/helpers";
import { useAuth } from "../contexts/AuthContext";

const Admin = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const { joinedObj } = getAllUsers();
  const { fetchAdminData } = useAuth();

  const handleAssignRole = async (
    userId: string,
    role: string,
    email: string
  ) => {
    try {
      await updateUserRole(userId, role);
      setMessage("assigned HR role");
      setEmail(email);
      setTimeout(() => {
        setMessage("");
      }, 5000);

      // Role assignment successful, you can perform any other action
    } catch (error) {
      console.log(error);
      // Handle error during role assignment
    }
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center w-100"
      style={{ height: "100vh" }}
    >
      <Card className="w-50" style={{ height: "auto" }}>
        <Card.Body>
          <h2 className="text-center mb-4">ADMIN BOARD</h2>
          {message && (
            <Alert variant="success">
              {email} {message}
            </Alert>
          )}

          <h3 className="text-center mb-5 mt-3">List of Users</h3>

          {joinedObj.length === 0 ? (
            <>
              <div className="w-100 text-center mt-2">
                List is Empty, Go Back{" "}
                <Link to="/login" onClick={() => fetchAdminData()}>
                  Log In
                </Link>
              </div>
            </>
          ) : (
            <>
              {" "}
              {joinedObj?.map((user: any) => (
                <li
                  key={user?.email}
                  className="d-flex align-items-center gap-3"
                >
                  {user?.email}{" "}
                  <Button
                    onClick={() =>
                      handleAssignRole(user?.id, "hr", user?.email)
                    }
                    className="w-4 mt-3"
                    type="submit"
                    style={{ height: "40px" }}
                  >
                    Assign HR Role
                  </Button>{" "}
                </li>
              ))}
            </>
          )}
        </Card.Body>
      </Card>
      {email && (
        <div className="w-100 text-center mt-2">
          Please Login to have access to the dashboard{" "}
          <Link to="/login" onClick={() => fetchAdminData()}>
            Log In
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Admin;
