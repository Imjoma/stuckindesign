"use client";

import { useState, useRef } from "react";

import { useOutsideAlerter } from "@/hooks/useOutsideClick";

export default function Home() {
  const [openImage, setOpenImage] = useState(null);
  const imageCard = useRef(null);
  useOutsideAlerter(imageCard, setOpenImage);

  const handleOpenImage = (id) => {
    setOpenImage(id);
  };

  return (
    <main className="text-red-500 ">
      {/* Wrapper */}
      <div className="flex items-center justify-center h-screen">
        <div
          ref={imageCard}
          className="flex flex-row gap-1"
          style={{
            perspective: "60rem",
          }}
        >
          {[...Array(13).keys()].map((item, idx) => (
            <div
              onClick={() => handleOpenImage(item)}
              key={item}
              className={`
              ${openImage === item ? "open" : ""}
            img ${"img-" + item}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
