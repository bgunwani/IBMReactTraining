import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Navbar = () => {
    const isAuthenticated = AuthService.isAuthenticated();
    const navigate = useNavigate();

    return (
        <nav className='navbar navbar-light bg-light px-3'>
            <a className='navbar-brand' href='/'>React Auth</a>
            {isAuthenticated && (
                <button
                    className='btn btn-danger'
                    onClick={() => { AuthService.logout(); navigate("/login", { replace: true }) }}>Logout</button>
            )}
        </nav>
    )

}

export default Navbar;