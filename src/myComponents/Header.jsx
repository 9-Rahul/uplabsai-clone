import React from 'react'
import '../styles/Header.css'
import hamburgerIcon from '../assets/icons/hamburgerIcon.svg'
import arrowIcon from '../assets/icons/arrow.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=496,fit=crop,q=95/AoPGlLRxpzcJbzB1/whatsapp-image-2025-01-25-at-17.00.21-m5KLn3EVzJSRzE55.jpeg"
                    alt="Logo"
                />
            </div>

            <div className="right-header">
                <nav><h3>Home</h3></nav>

                <nav>
                    <span><h3>Solutions <span><img src={arrowIcon} alt="arrowIcon" /></span></h3></span>
                    <div className="dropdown-menu">
                        <div><span>Voice AI Agents</span></div>
                        <div><span>Text AI Agents</span></div>
                        <div><span>Predictive Analytics</span></div>
                        <div><span>Video Analytics</span></div>
                        <div><span>RPA</span></div>

                    </div>
                </nav>

                <nav><h3>About Us</h3></nav>
                <nav><h3>Blog</h3></nav>

            </div>
            <span class="hamburger">
                <img src={hamburgerIcon} alt="menu" />
            </span>
        </header>
    )
}

export default Header
