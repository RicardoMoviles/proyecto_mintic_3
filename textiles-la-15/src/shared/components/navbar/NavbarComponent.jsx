import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './NavbarComponentStyle.css';

function NavbarComponent(props) {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    let title = props.title;

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src="https://media.gettyimages.com/vectors/textile-industry-vector-id1253121853?s=612x612" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    <a className="navbar-brand" href="#">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
<<<<<<< HEAD
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            {/*<Link to="/login" className="nav-link" >Login</Link>*/}
                            <Link to="/register" className="nav-link" >Users</Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/registerProducts" className="dropdown-item" >Add</Link></li>
                                    <li><Link to="/listProducts" className="dropdown-item" >List</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sales
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/ManageSales" className="dropdown-item" >Add</Link></li>
                                    <li><Link to="/listProducts" className="dropdown-item" >List</Link></li>
=======
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page" >Página Principal</Link>
                            {/*<Link to="/login" className="nav-link" >Login</Link>*/}
                            <Link to="/register" className="nav-link" >Usuarios</Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/registerProducts" className="dropdown-item" >Agregar Productos</Link></li>
                                    <li><Link to="/listProducts" className="dropdown-item" >Editar Productos</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ventas
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/ManageSales" className="dropdown-item" >Ingresar Venta</Link></li>
                                    <li><Link to="/listProducts" className="dropdown-item" >Editar Venta</Link></li>
>>>>>>> release_Andres
                                </ul>
                            </li>
                        </ul>
                        {isAuthenticated ? null : <a className="btn btn-primary btn-log" onClick={() => loginWithRedirect()}>Iniciar Sesión</a>}
                        {isAuthenticated ?<a className="btn btn-primary btn-log" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</a> : null}
                    </div>
<<<<<<< HEAD
                    <form className="d-flex">
                        <a className="btn btn-primary" type="">{isAuthenticated ? user.name : "User"}</a>
=======
                    <form class="d-flex">
                        <button class="btn btn-primary" type="">{isAuthenticated ? user.name : "Usuario"}</button>
>>>>>>> release_Andres
                    </form>
                </div>
            </nav>
        </Fragment>
    )

}

export default NavbarComponent;
