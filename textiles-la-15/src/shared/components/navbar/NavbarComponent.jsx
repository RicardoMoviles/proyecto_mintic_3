import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function NavbarComponent(props) {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    let title = props.title;
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src="https://media.gettyimages.com/vectors/textile-industry-vector-id1253121853?s=612x612" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    <a class="navbar-brand" href="#">{title}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            {/* <Link to="/login" className="nav-link" >Login</Link> */}
                            <a className="nav-link" onClick={() => loginWithRedirect()}>Log In</a>
                            <a className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Log out</a>
                            <Link to="/register" className="nav-link" >Users</Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/registerProducts" className="dropdown-item" >Add</Link></li>
                                    <li><Link to="/listProducts" className="dropdown-item" >List</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sales
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/ManageSales" className="dropdown-item" >Add</Link></li>
                                    <li><Link to="/listProducts" className="dropdown-item" >List</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )

}

export default NavbarComponent;