import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="custom-footer">
            <div className="container">
                <p>&copy; 2024 RiddleQuest. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="#home">Home</a>
                    <a href="#quiz">Quiz</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;