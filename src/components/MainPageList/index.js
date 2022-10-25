import React from "react";
import cs from "classnames";
import StyleWrapper from './style';

function MainPageList(props) {
  return (
    <StyleWrapper className={cs("mb-3", props.liststyle)}>
      <span>
        {props.title}
      </span>
      <p>
        {props.content}
      </p>
    </StyleWrapper>
  )
}

export default MainPageList;