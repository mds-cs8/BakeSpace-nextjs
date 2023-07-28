// CUSTTOM CONTAINER
import React from "react";

export function Wrapper({ children, className }) {
  return (
    <div
      className={`w-full max-w-[1280px] px-1 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
