import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="header-content">
            <div className="logo">
                <img src="./Logo.png" alt="" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/label">Label</Link></li>
                    <li><Link to="/label2">Label</Link></li>
                </ul>
            </div>
            <div className="buttons">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Sign Up</button></Link>
            </div>
        </div>
    )
}