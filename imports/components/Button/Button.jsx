import React from "react";

export default function Button(props) {
  return (
    <div className="buttonContainer">
      <div className="button">
        <button onClick={props.onClick}>{props.buttonText}</button>
      </div>
    </div>
  );
}
