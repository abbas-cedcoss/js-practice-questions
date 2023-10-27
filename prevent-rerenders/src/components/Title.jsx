import React, { memo } from "react";
import { useTitle } from "../context/TitleContext";

const Title = () => {
  const { title, setTitle } = useTitle();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  console.log("Title rendered");

  return (
    <div>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitleChange} />
    </div>
  );
};

export default memo(Title);
