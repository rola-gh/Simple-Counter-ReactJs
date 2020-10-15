import React from "react";
import '../style/style.css'
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
