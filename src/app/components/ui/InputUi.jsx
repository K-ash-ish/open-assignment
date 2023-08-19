import React from "react";

function InputUi({ type, name }) {
  return (
    <div className=" w-4/5 flex flex-col h-14 justify-around autofill:bg-none">
      <label htmlFor={type} className="capitalize text-sm">
        {name}
      </label>
      <input
        type={type}
        className="rounded-md px-2 caret-gray-400 bg-[#f5f5f5] focus:bg-[#edebeb] py-1 text-sm border-none focus:outline-none"
      />
    </div>
  );
}

export default InputUi;
