import React, { memo } from "react";
import { useHandlingTime } from "../context/HandlingTimeContext";

function HandlingTime() {
  const { handlingTime, setHandlingTime } = useHandlingTime();

  const handleTimeChange = (event) => {
    setHandlingTime(event.target.value);
  };

  console.log("Handling Time rendered");

  return (
    <div>
      <label>Handling Time:</label>
      <select value={handlingTime} onChange={handleTimeChange}>
        <option value="">Select Time</option>
        <option value="1">1 day</option>
        <option value="2">2 days</option>
        <option value="3">3 days</option>
      </select>
    </div>
  );
}

export default memo(HandlingTime);
