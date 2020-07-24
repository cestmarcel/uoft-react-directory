import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header(){
return (
    <Navbar className="Navbar-Marcel">
        <Navbar.Brand href="#home">
        <b>Marcel Thiemann</b>
        </Navbar.Brand>
    </Navbar>
)
}

export default Header;