import React from 'react'
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
const Dashboard = () => {
  return (
    <Container
    className="d-flex flex-column align-items-center justify-content-center w-100"
    style={{ height: "100vh" }}
  >
    <Card className="w-50" style={{ height: "auto" }}>
      <Card.Body>
        <h2 className="text-center mb-4">ADMIN BOARD</h2>
        
      </Card.Body>
    </Card>
    
  </Container>
  )
}

export default Dashboard;