import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { createAdminCollection } from "../../services/createCollections";

const SignUp = () => {
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const passwordConfirmRef: any = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, admin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page.

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // Check if the entered passwords do not match.
      return setError("Passwords do not match"); // Set an error message.
    }

    // Extract user input values from the form fields.
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError(""); // Clear any previous error messages.
      setLoading(true); // Set the loading state to true to indicate registration in progress.

      // Attempt to register the user with the provided email and password.
      await signup(email, password);

      // If registration is successful, navigate the user to the login page.
      navigate("/login");
    } catch (error) {
      setError("Failed to create an account"); // Handle registration failure with an error message.
    } finally {
      // Regardless of success or failure, perform the following tasks.

      createAdminCollection(email);

      // Potentially related to database operations.
      setLoading(false); // Set loading state back to false to signify the end of the registration process.
    }
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center w-100"
      style={{ height: "100vh" }}
    >
      <Card className="w-50">
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {admin && admin}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100  mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </Container>
  );
};

export default SignUp;
