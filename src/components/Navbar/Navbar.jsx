import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <>
        <header className="nav-wrapper">
            <div className="container">
                <div className="nav">
                    <Link to="/" className="brand-logo">Coursekino</Link>
                </div>
            </div>
        </header>
    </>
}
export default Navbar;