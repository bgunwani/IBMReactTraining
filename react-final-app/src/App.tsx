import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AuthService from './services/AuthService';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


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
