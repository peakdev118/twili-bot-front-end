import React from "react";
import cs from "classnames";
import {titleStyle} from './style';

const StyleWarraper = titleStyle;

function SectionTitle(props) {
    return (
        <StyleWarraper className={cs("section-title", props.className)}>
            {props.title}
        </StyleWarraper>
    )
}

export default SectionTitle;