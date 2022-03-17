import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>WLIVE</a>
            <ul className='permalinks'>
            <a href="#">Home</a>
            <a href="#about">about</a>
            <a href="#experience">experience</a>
            <a href="#services">services</a>
            <a href="#testimonials">testimonials</a>            
            <a href="#portfolio">portfolio</a>            
            <a href="#contact">contact</a>            
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://twitter.com"><AiOutlineTwitter/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;WLIVE Web Development. All Rights Reserved. </small>
            </div>
        </footer>
    );
};

export default Footer;