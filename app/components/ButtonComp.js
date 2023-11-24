import React from "react";

const ButtonComp = ({ text, wid }) => {
  return (
    <div>
      <button
        type="submit"
        style={{ backgroundColor: "#F85390", width: `${wid}px` }}
        className="hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonComp;
