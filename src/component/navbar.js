import React from "react";
// eslint-disable-next-line no-unused-vars
import Style from '../style/style.css'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = ({totalCounters}) => {
    return (
        <nav className={'navbar'}>
            <a><FontAwesomeIcon icon={faShoppingCart} /></a>
            <a><button className="totalCounters">{totalCounters}</button></a>
            <a><span>Items</span></a>
        </nav>
    );
};

export default NavBar;
