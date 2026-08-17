import React from "react";

type btnProp = {
  children: React.ReactNode;
};

function Button({ children }: btnProp) {
  return (
    <button
      className=" bg-emerald-800 text-white px-3 rounded-2xl gap-2 flex h-full text-md
      m-0 p-0  align-middle items-center py-1 max-md:justify-center cursor-pointer"
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
