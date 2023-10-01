import React from "react";
import {FaGlobeAfrica} from "react-icons/fa"

export default function Header(){
    return(
        <nav className="navbar">
            <FaGlobeAfrica style={{fontSize: '30px'}} />
            <p>my travel journal.</p>
        </nav>
    )
}
