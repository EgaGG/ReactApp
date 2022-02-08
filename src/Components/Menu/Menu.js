import Typewriter from 'typewriter-effect'
import './Menu.css'
import { NavLink, Link } from "react-router-dom";


const activeNavBar = ({isActive}) => isActive ? 'activeNavBar' : '';

export default function Menu() {
    return (
            <nav className="menuBody">
               <div className="menuLogo">Learn: <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewritter)=> {
          typewritter
          .start()
          .typeString('<span style="color: #dba53c; font-size: 25px;">JS</span>')
          .pauseFor(1000)
          .deleteChars(2)
          .typeString('<span style="color: #81d6f8; font-size: 25px;">React</span>')
          .pauseFor(1000)
        }}
        />
        </div>
        <ul className='menuUl'>
               <li><NavLink to="/" className={activeNavBar}>Home</NavLink></li>
               <li><NavLink to="/About" className={activeNavBar}>About Us</NavLink></li> 
              
        </ul>
        
            </nav>
    );
}