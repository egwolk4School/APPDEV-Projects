import  {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGamepad } from '@fortawesome/free-solid-svg-icons'
// import './Nav.css'
export const Nav = () => {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
        {/* <Link to="/"><img src="https://placeholder.pics/svg/120x50" alt="Logo"/></Link> */}
        <Link to="/" className='title'><FontAwesomeIcon icon={faGamepad} className='logo'/> Game Archive</Link>
        <div className="menu" onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <FontAwesomeIcon icon={faBars} className='bars'/>
        </div>
        <ul className={menuOpen?'open':''}>
          <li>
            <NavLink to='/'>Home</NavLink >
          </li>
          <li>
            <NavLink to='/about'>About</NavLink >
          </li>
          <li>
            <NavLink to='/games'>Games</NavLink >
          </li>
        </ul>
    </nav>
  )
}