import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg main-background main-color">
            <div className="container-fluid">
                <h1 className="h3"><Link className="nav-link" to="/">GameRater</Link></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/juego/nuevo">Crear juego</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias">Categorias</Link>
                        </li>
                        <li className="navbar-nav">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;