import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';



const AuthService = {
  login: (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("auth", "true")
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem("auth");
  },

  isAuthenticated: () => {
    return localStorage.getItem("auth") === "true";
  }
}

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (AuthService.login(username, password)) {
      onLogin();
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  }

  return (
    <>
      <div className='container mt-5'>
        <h2>Login</h2>
        {error && <p className='text-danger'>{error}</p>}
        <input
          type='text'
          className='form-control mb-2'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)} />
        <input
          type='password'
          className='form-control mb-2'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)} />
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

const Dashboard = () => {
  return <h2 className='container mt-5'>Welcome to Dashboard</h2>
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return AuthService.isAuthenticated() ?
    React.createElement(React.Fragment, null, children) :
    React.createElement(Navigate, { to: "/Login" });
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isAuthenticated());

  useEffect(() => {
    setIsAuthenticated(AuthService.isAuthenticated());
  }, []);

  return (
    <>
      <Router>
        <nav className='navbar navbar-light bg-light px-3'>
          <a className='navbar-brand' href='/'>React Auth</a>
          {isAuthenticated && (
            <button
              className='btn btn-danger'
              onClick={() => { AuthService.logout(); setIsAuthenticated(false); }}>Logout</button>
          )}
        </nav>
        <Routes>
          <Route path='/login' element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}></Route>
        </Routes>
      </Router >
    </>
  )
}

export default App;
