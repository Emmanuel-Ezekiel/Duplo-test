import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Login from "./pages/authPages/Login";
import PrivateRoutes from "./routes/privateRoutes";
import SignUp from "./pages/authPages/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Permission from "./pages/permissionDenied";
import "./styles/App.scss";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateRoutes />}>
              <Route element={<Admin />} path="/" />
            </Route>

            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />

            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Permission />} path="/denied" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
