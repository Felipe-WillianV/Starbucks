import {FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { useLocation } from "react-router-dom";

import './Footer.css'

function Footer() {

    const location = useLocation();

    const isContactPage = location.pathname === '/contact';

    const isWhatsNewPage = location.pathname === '/whatsnew';

    return (
        <footer className={`footer ${isContactPage ? 'contact-footer' : ''} ${isWhatsNewPage ? 'whatsnew-footer' : ''}`}>
            <ul className="social_list">
             <li className="social_list">
                    <FaFacebook />
                </li>
                <li className="social_list">
                    <FaInstagram />
                </li>
                <li className="social_list">
                    <FaTwitter />
                </li>
            </ul>
            <p><span>Site feito apenas para Estudos</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer