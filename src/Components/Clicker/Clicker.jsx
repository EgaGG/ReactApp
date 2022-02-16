import React, { useState } from "react";
import './Clicker.css'
import {GiMoneyStack} from "react-icons/gi"



export default function Clicker() {
//js code
    const [money, setMoney] = useState(0)
    function plusMoney() {
    setMoney(money + 1)
    }

//js code

    return(
        <div className="clickerBody">
            <div className="clickerMenu">
                <div className="clickerLogo">Clicker.App</div>
                <div className="currentMoney">Current Money: {money}</div>
            </div>
            
            <button onClick={ plusMoney } className="moneyBag"><GiMoneyStack className="svgMoneyBag"/></button>
        </div>
    );
}