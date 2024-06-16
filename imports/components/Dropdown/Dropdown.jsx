import React, { useState } from "react";

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const [currentChoice, setCurrentChoice] = useState(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (choice) => {
    const selectedChoice = choice.title || choice;
    setCurrentChoice(selectedChoice);
    setOpen(false);

    if (props.onSelect) {
      props.onSelect(selectedChoice);
    }
  };

  return (
    <>
      <h2>{props.title}</h2>
      <div className="dropdown">
        <div onClick={handleOpen} className="active">
          {currentChoice !== null ? currentChoice : props.title}
        </div>
        {open ? (
          <ul className="menu">
            {props.options.map((choice, index) => (
              <li key={index} className="menu-item">
                <button onClick={() => handleSelect(choice)}>
                  {choice.title || choice}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
