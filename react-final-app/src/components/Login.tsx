import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (AuthService.login(username, password)) {
            navigate("/dashboard", { replace: true });
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

export default Login;