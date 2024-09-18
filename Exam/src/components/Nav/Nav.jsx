import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom'
import './Nav.css'
export const Nav = () => {
  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/"><h3 className='headerTitle'><FontAwesomeIcon icon={faSquareCaretUp} /> KeyUp</h3></Link>
                <button className="nav-toggle">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <ul className="links">
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Setup">Setup</NavLink>
                </li>
                <li>
                    <NavLink to="/Use">Use</NavLink>
                </li>
                <li>
                    <NavLink to="/Troubleshooting">Troubleshoot</NavLink>
                </li>
                <li>
                    <NavLink to="/Care">Care</NavLink>
                </li>
                <li>
                    <NavLink to="/Support">Support</NavLink>
                </li>
            </ul>
            <ul className="social-icons">
                <li>
                    <a href="https://facebook.com" target="_blank" className='soc'>
                    <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" className='soc'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" className='soc'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://store.instagram.com" target="_blank" className='soc'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}
