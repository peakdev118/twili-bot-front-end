import React from 'react';
import cs from 'classnames';
import {simpleDescriptionStyle} from './style';

const StyleWarraper = simpleDescriptionStyle;

function SimpleDescription(props){
    return (
        <StyleWarraper className={cs("section-simple-description", props.className)}>
            {props.description}
        </StyleWarraper>
    )
}

export default SimpleDescription;