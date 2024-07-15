"use client";

import { useState, useRef, useEffect } from "react";

import { useOutsideAlerter } from "@/hooks/useOutsideClick";
import { designs } from "@/constant";

import Carousel from "@/components/Carousel";

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
    if (!hover) return;
    if (openImage === null) return;
    if (openImage === id) return;
    setOpenImage(null);
  };

  const [swiper, setSwiper] = useState(false);
  useEffect(() => {
    if (swiper) return;
    setSwiper(true);
  }, [swiper]);

  const [isCarousel, setIsCarousel] = useState(false);

  return (
    <main className="relative z-30">
      <DisplayToggler isCarousel={isCarousel} setIsCarousel={setIsCarousel} />

      {/* PC, Stack Horizontal and Vertical */}
      <section
        className={`
      ${isCarousel && "hidden"}
        `}
      >
        <ul
          ref={imageCard}
          className="flex flex-col items-center gap-2 lg:gap-1 lg:flex-row lg:w-auto lg:flex-nowrap"
          style={{
            perspective: "60rem",
          }}
        >
          {/* Image Card Item */}
          {designs.map((item, idx) => (
            <li
              onMouseEnter={() => handleMouseHover(item.id)}
              onClick={() => handleOpenImage(item.id)}
              key={item.id}
              className={`  
              ${openImage === item.id && "open-sm"}
              ${openImage === item.id && hover && "open"}
              ${hover === true && "img"}
             img-card  
             `}
              style={{
                backgroundImage: `url(${item.imageSrc})`,
              }}
            >
              {/* {openImage === item.id && <ButtonToHD image={item.imageSrc} />} */}
            </li>
          ))}
        </ul>
      </section>
      {/* Mobile */}
      {swiper && isCarousel && <Carousel designs={designs} />}
    </main>
  );
}

const DisplayToggler = ({ isCarousel, setIsCarousel }) => {
  return (
    <div className="fixed z-50 flex flex-row items-center justify-center p-1 scale-110 -translate-x-1/2 bg-black rounded-full lg:hidden bottom-14 backdrop-blur-sm left-1/2 bg-opacity-15">
      <button
        onClick={() => setIsCarousel((state) => (state = true))}
        className="w-16 bg-center bg-no-repeat bg-auto rounded-full h-11"
        style={{
          backgroundImage: `url(assets/icons/carousel.svg)`,
        }}
      ></button>
      <button
        onClick={() => setIsCarousel((state) => (state = false))}
        className="w-16 bg-center bg-no-repeat bg-auto rounded-full h-11"
        style={{
          backgroundImage: `url(assets/icons/stackVer.svg)`,
        }}
      ></button>
      <div
        className={`
            duration-300 
          ${isCarousel ? "translate-x-0" : "translate-x-16"}
          bg-opacity-15 bg-white absolute top-1 left-1 rounded-full h-11 w-16`}
      ></div>
    </div>
  );
};

const ButtonToHD = () => {
  return (
    <div className="absolute flex items-center justify-center w-8 h-8 scale-125 -translate-x-1/2 bg-black rounded-full lg:scale-100 bottom-10 backdrop-blur-sm left-1/2 bg-opacity-40">
      <button
        className="w-4 h-4 bg-contain"
        style={{
          backgroundImage: `url(assets/icons/maximize.svg)`,
        }}
      ></button>
    </div>
  );
};
