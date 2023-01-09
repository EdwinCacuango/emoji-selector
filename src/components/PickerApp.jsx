import React, { useRef } from "react";
import Picker from "./Picker/Picker";

const PickerApp = () => {
  const inputRef = useRef(null);
  return (
    <div className="flex gap-3 items-center">
      <input
        ref={inputRef}
        className="border px-3 py-1 my-4 w-full rounded h-10"
        placeholder="Write here"
      />
      <Picker ref={inputRef} />
    </div>
  );
};

export default PickerApp;
