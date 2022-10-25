import React from "react";
import StyleWarraper from './style';

function Feature(props) {
    return (
        <StyleWarraper className="text-center mb-4">
            <div className="icon">
                <img src={props.icon} alt = {props.title}></img>
            </div>
            <div className="mt-4">
                <span className = "title">{props.title}</span>
            </div>
            <p className="content">{props.content}</p>
        </StyleWarraper>
    )
}


export default Feature;