import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./UKAD_logo.png";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_links">
                <Link className="navbar_logo" to="/">
                    <img src={logo} alt="UKAD_logo" />
                </Link>
                <ul>
                    <li>
                        <NavLink to="/Home">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Products">PRODUCTS</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
