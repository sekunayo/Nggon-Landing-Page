import React from "react";

function Button(props) {
  return (
    <button type="submit" className={props.buttonStyle}>
      {props.children}
    </button>
  );
}

export default Button;
