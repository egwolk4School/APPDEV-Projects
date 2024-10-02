import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBrain } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
export const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
        <Link to="/" className='title'><FontAwesomeIcon icon={faBrain} /> Stoic Quotes</Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <FontAwesomeIcon icon={faBars} className='bars'/>
        </div>
        <ul className={menuOpen?'open':''}>
            <li>
                <NavLink to="/Seneca">Seneca</NavLink>
            </li>
            <li>
                <NavLink to="/Aurelius">Aurelius</NavLink>
            </li>
            <li>
                <NavLink to="/Diogenes">Diogenes</NavLink>
            </li>
        </ul>
    </nav>
  )
}