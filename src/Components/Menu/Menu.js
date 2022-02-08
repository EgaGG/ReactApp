import { Link } from "react-router-dom";
import { About } from "../Index";
import Typewriter from 'typewriter-effect'
import './Menu.css'
import styled from "styled-components";

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
        <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/About">About Us</Link></li> 
              
        </ul>
            </nav>
    );
}