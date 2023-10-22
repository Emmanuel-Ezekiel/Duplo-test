import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes: any = () => {
  const { fetchAdminData } = useAuth();
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center w-100"
      style={{ height: "100vh" }}
    >
      <Card className="w-50" style={{ height: "300px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Permission denied!</h2>

          <h4 className="w-100 text-center mt-5">
            You dont have Permission to access the dashboard!!
          </h4>
          <div className="w-100 text-center mt-5">
            Go back{" "}
            <Link to="/login" onClick={() => fetchAdminData()}>
              login
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PrivateRoutes;
