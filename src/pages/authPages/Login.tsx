import React, { useRef, useState } from "react" 
import { Form, Button, Card, Alert , Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const emailRef: any = useRef()
  const passwordRef: any = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login, fetchData} = useAuth()
  const navigate = useNavigate();

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setError("")
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      fetchData();
      setTimeout( () => {
        navigate("/");
      }, 2000)
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }


  return (
    <Container className="d-flex flex-column align-items-center justify-content-center w-100" style={{height: '100vh'}}>
      <Card className="w-50" style={{ height: '300px' }} >
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Container>
  );
};

export default Login;
