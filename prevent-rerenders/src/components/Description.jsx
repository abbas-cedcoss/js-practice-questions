import React, { memo } from "react";
import { useDescription } from "../context/DescriptionContext";

const Description = () => {
  const { description, setDescription } = useDescription();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  console.log("Description rendered");

  return (
    <div>
      <label>Description:</label>
      <textarea value={description} onChange={handleDescriptionChange} />
    </div>
  );
};

export default memo(Description);
