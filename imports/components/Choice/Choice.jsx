import React, { useState } from "react";

export default function Choice(props) {
  const [option, setOption] = useState(null);

  const handleOptionChange = (selectedOption) => {
    setOption(selectedOption);
    if (props.onSelect) {
      props.onSelect(selectedOption);
    }
  };

  return (
    <>
      <h2>{props.title}</h2>
      <div className="checkBoxContainer">
        {props.options.map((type, index) => (
          <form key={index}>
            <label>
              <input
                type="radio"
                name={props.title}
                value={type}
                checked={option === type}
                onChange={() => handleOptionChange(type)}
              />
              {type}
            </label>
          </form>
        ))}
      </div>
    </>
  );
}
