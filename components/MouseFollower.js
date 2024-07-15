"use client";
import { useState } from "react";

const MouseFollower = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {/* PC */}
      <div
        className=" hidden lg:block absolute top-0 left-0  w-full h-full overflow-hidden text-white"
        onMouseMove={handleMouseMove}
      >
        {children}
        <div
          className={`
          
          z-0
           opacity-5 pointer-events-none  absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-[1080px] h-[1080px] bg-gradient-radial from-white via-transparent to-transparent`}
          style={{ top: position.y, left: position.x }}
        ></div>
      </div>
      {/* Mobile */}
      <div className="p-8 lg:hidden">{children}</div>
    </>
  );
};

export default MouseFollower;
