import React from "react";
import cs from 'classnames';
import StyleWarraper from './style';

function CustomCard(props) {
  return (
    <StyleWarraper className = {cs("px-3 py-4 mb-3", props.className)}>
      <div className="custom-grey-card-head d-flex align-items-center">
        <img className = "custom-card-icon me-3" src={props.icon} alt={props.title}></img>
        <span className="custom-card-title">{props.title}</span>
      </div>
      <div className="mt-3 custome-card-content">
        {props.content}
      </div>
    </StyleWarraper>
  )
}

export default CustomCard;