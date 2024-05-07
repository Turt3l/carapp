import React, { useState } from "react";

export default function NumberField(props) {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);

  const handleStartChange = (value) => {
    setStartValue(value);
    if (props.onChangeStart) {
      props.onChangeStart(value);
    }
  };

  const handleEndChange = (value) => {
    setEndValue(value);
    if (props.onChangeEnd) {
      props.onChangeEnd(value);
    }
  };

  return (
    <>
      <h2>{props.title}</h2>
      <div className="numberFieldContainer">
        <div className="numberField">
          <input
            type="number"
            value={startValue}
            onChange={(e) => handleStartChange(e.target.value)}
          />
          -
          <input
            type="number"
            value={endValue}
            onChange={(e) => handleEndChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
