import React from "react";
import cs from 'classnames';
import {Button} from 'react-bootstrap';
import './style.css';

function Radius50 (props){
    const {className} = props;
    return (
        <Button className = {cs('radius50', className)}>
            {props.children}
        </Button>
    )
}

export default Radius50;