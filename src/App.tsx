import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Login from './pages/auth/Login';
import PrivateRoutes from './utils/privateRoutes';
import SignUp from './pages/auth/SignUp';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Admin/>} path="/" />
                <Route element={<Dashboard/>} path="/dashboard"/>
            </Route>
            <Route element={<Login/>} path="/login"/>
            <Route element={<SignUp/>} path="/signup"/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
