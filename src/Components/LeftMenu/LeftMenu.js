import './LeftMenu.css'
import { NavLink, Link } from "react-router-dom";

export default function LeftMenu() {
    return(
        <div className="leftMenuBody">
            <ul>
              <li className='leftMenuList'><NavLink to="/">Home</NavLink></li>
              <li className='leftMenuList'><a href="https://vk.com/" target="_blank">VK</a></li>
              <li className='leftMenuList'><a href="https://twitter.com/" target="_blank">Twitter</a></li>
              <li className='leftMenuList'><a href="https://telegram.org/" target="_blank">Telegram</a></li>
            </ul>
        </div>
    );
}