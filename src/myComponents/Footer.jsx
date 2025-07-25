import React from 'react'
import '../styles/Footer.css'
import fbIcon from '../assets/icons/fb-icon.svg'
import instaIcon from '../assets/icons/insta-icon.svg'
import linkedinIcon from '../assets/icons/linkedin-icon.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="social-media">
                <span><img src={fbIcon} alt="fb-icon" /></span>
                <span><img src={instaIcon} alt="insta-icon" /></span>
                <span><img src={linkedinIcon} alt="linkedin-icon" /></span>
            </div>

            <div className="footer-logo">
                <img className="bottom-logo-one" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=377,h=55,fit=crop/AoPGlLRxpzcJbzB1/whatsapp-image-2025-01-25-at-17.00.21-m5KLn3EVzJSRzE55.jpeg" alt="" />
                <img className="bottom-logo-two" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=147,h=24,fit=crop/AoPGlLRxpzcJbzB1/whatsapp-image-2025-01-25-at-17.00.21-m5KLn3EVzJSRzE55.jpeg" alt="" />
            </div>
        </footer>
    )
}

export default Footer
