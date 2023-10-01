import React from "react";
import {MdLocationPin} from "react-icons/md"

export default function Main(props){
    return (
        <div className="main">
            <img src={'/images/' + props.photo} alt="city_location" />
            <div className="main-content">
                <MdLocationPin style={{color: '#F55A5A',fontSize: '12px'}} />
                <span>{props.city}</span>
                <small>View on Google Maps</small>
                <h2>{props.location}</h2>
                <br />
                <h5>{props.time}</h5>
                <p className="main-text">{props.description}</p>
            </div>
        </div>
        
    )

}

