import React from "react";
import cs from "classnames";
import StyleWrapper from './style';

import './style.css';

function MainPageList(props) {
  return (
    <StyleWrapper className={cs("mb-3", props.liststyle)}>
      <p>
        {props.title}
      </p>
      <span>
        {props.content}
      </span>
    </StyleWrapper>
  )
}

export default MainPageList;