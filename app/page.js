"use client";

import { useState, useRef, useEffect } from "react";

import { useOutsideAlerter } from "@/hooks/useOutsideClick";
import Footer from "@/components/Footer";

export default function Home() {
  const [hover, setHover] = useState(false);
  const [openImage, setOpenImage] = useState(null);
  const imageCard = useRef(null);
  useOutsideAlerter(imageCard, setOpenImage);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setHover(true);
    } else {
      setHover(false);
    }

    window.onresize = () => {
      if (window.innerWidth >= 1024) {
        setHover(true);
      } else {
        setHover(false);
      }
    };
  }, [hover, setHover]);

  const handleOpenImage = (id) => {
    if (openImage !== null) {
      setOpenImage(null);
    }
    setOpenImage(id);
  };

  const handleMouseHover = (id) => {
    if (openImage === id) return;
    setOpenImage(null);
  };

  return (
    <main className="text-white ">
      {/* Wrapper */}
      <section className="flex flex-col items-center h-screen gap-8 py-4 overflow-x-hidden justify-evenly ">
        <header className="flex flex-col items-center justify-center flex-1 gap-4 p-8">
          <h1 className="text-4xl font-bold sm:text-6xl lg:text-8xl">
            Stuck in Design
          </h1>
          <p className="text-sm font-semibold text-gray-500 sm:text-base">
            2022 - 2024
          </p>
        </header>
        {/* Image Card List */}

        <ul
          ref={imageCard}
          className="px-2 lg:gap-1 lg:flex items-centere lg:w-auto lg:flex-nowrap lg:flex-row"
          style={{
            perspective: "60rem",
          }}
        >
          {/* Image Card Item */}
          {[...Array(13).keys()].map((item, idx) => (
            <li
              onMouseEnter={() => handleMouseHover(item + 1)}
              onClick={() => handleOpenImage(item + 1)}
              key={item + 1}
              className={`
              border
              ${openImage === item + 1 ? "open " : ""}
              ${hover === true ? "img" : ""}
             img-card`}
            >
              <p className="pl-1">{item + 1}</p>
            </li>
          ))}
        </ul>

        <Footer />
      </section>
    </main>
  );
}
