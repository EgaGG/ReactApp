import './LeftMenu.css'
import { NavLink, Link } from "react-router-dom";
import { FaSlidersH, FaBook } from "react-icons/fa"
import {AiFillHome} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"

export default function LeftMenu() {
    return(
        <div className="leftMenuBody">
            <ul className='leftMenuUl'>
             <br/> <li className='leftMenuList'><NavLink to="/"><AiFillHome/> Главная</NavLink></li>
             <br/><li className='leftMenuList'><NavLink to="/About"><FaBook/> О нас</NavLink></li>
             <br/><li className='leftMenuList'><a href="https://twitter.com/" target="_blank">Моя медиатека</a></li>
            </ul>
        </div>
    );
}