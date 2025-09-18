import React from "react";

export const List = (props) => {
  return (
    <div className="bg-gray-300 h-[62px] w-[345px] rounded-[6px] flex justify-between p-4">
      <div className="flex items-center gap-2.5">
        <input type="checkbox" />
        <p>{task}</p>
      </div>
      <button>delete</button>
    </div>
  );
};
