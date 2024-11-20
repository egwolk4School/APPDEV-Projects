import './Header.css'
export default function Header() {
    return(
      <header>
        <nav>
          <h1 className='title'>My Website</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>  
    );
}