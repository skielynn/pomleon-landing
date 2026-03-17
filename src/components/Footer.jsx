import React from "react";
import "../components/Footer.css";
import logo from "../images/pomleonpartnerslogo.jpeg";



function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-col footer-brand">
                <div className="footer-logo-row">
                    <img 
                    src={logo}
                    alt="Pomleon Partners Logo"
                    className="footer-logo"
                    />
                    <div className="footer-brand-text">
                        <h3>Pomleon Partners, LLC</h3>
                        <p>Honest, family-owned cash home buyers in Oklahoma.</p>
                    </div>
                </div>
            </div>


           <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#how">How It Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
           </div>

           <div className="footer-col">
            <h4>Contact</h4>
            <p>(702) 793-6624<br /> (725) 269-0177</p>
            <p>stacey@pomleon.com</p>
            <p className="footer-location">Serving all of Oklahoma</p>
           </div>
          </div>

        <div className="footer-bottom">
            <p>© {currentYear} Pomleon Partners, LLC. All rights reserved.</p>
            <p className="footer-disclaimer">
                No legal, tax or financial advice implied. Please consult a professional for your specific situation.
            </p>
        </div>
        </footer>
    );
}

export default Footer;