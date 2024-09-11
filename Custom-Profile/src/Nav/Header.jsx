import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import './Nav.js';
export default function Header(){
    
    return(
         <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h3 className='headerTitle'><FontAwesomeIcon icon={faFaceSmile} /> Personal Profile</h3>
                    <button className="nav-toggle">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <ul className="links">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contacts</a>
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
                        <a href="https://store.steampowered.com" target="_blank" className='soc'>
                            <FontAwesomeIcon icon={faSteam} />
                        </a>
                    </li>
                    
                </ul>
            </div>
         </nav>
    )
}