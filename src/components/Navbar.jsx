import "./Navbar.css";
import logo from "../images/pomleonpartnerslogo.jpeg";

function Navbar() {
    return (
        <nav className="navbar">

        <div className="nav-logo">
            <img 
            src={logo}
            alt="Pomleon Partners Logo"
            className="logo-img"
            />
        </div>
        <div className="nav-links">
            <a href="#home">Home</a>
           <a href="#about">About</a>
           <a href="#how">How It Works</a>
           <a href="#contact">Contact</a>
           </div>
        </nav>
    );
}

export default Navbar;