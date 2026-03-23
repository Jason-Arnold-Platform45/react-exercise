import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../assets/Navbar.css'

export const Navbar = () => {
    return (
        <div className="header-content">
            <div className="logo">
                <img src="./Logo.png" alt="" />
            </div>
            <div className="nav-bar">
                <ul>
                    <li><NavLink to="/home" end>Home</NavLink></li>
                    <li><NavLink to="/label">Label</NavLink></li>
                    <li><NavLink to="/label2">Label</NavLink></li>
                </ul>
            </div>
            <div className="buttons">
                <Link to="/"><button>Login</button></Link>
                <Link to="/signup"><button className="signup">Sign up</button></Link>
            </div>
        </div>
    )
}