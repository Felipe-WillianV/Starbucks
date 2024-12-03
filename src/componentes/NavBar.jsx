import { Link } from 'react-router-dom'

import Container from './Container'

import Logo from "../img/logo.png"

import './NavBar.css'

function NavBar() {
    return (
        <nav className="nav">
         <Container>
             <img className="img" src={Logo} alt="Starbucks" />
            <ul className="ul">
            <li className="li">
                <Link to="/">Welcome</Link>
             </li>
            <li className="li">
                <Link to="/menu">Menu</Link>
            </li>
            <li className="li">
                <Link to="/whatsnew">WhatsNew</Link>
            </li>
            <li className="li">
                <Link to="/contact">Contact</Link>
            </li>    
            </ul>
         </Container>
        </nav>
    )
}



export default NavBar