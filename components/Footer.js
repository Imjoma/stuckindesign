import React from "react";

const Footer = () => {
  return (
    <footer className="lg:flex flex-row z-20  justify-center py-12 lg:text-lg  text-white ">
      <div className="">
        <p className="opacity-60">
          Built with <span className="">NextJS</span>,{" "}
          <span className="">Tailwind CSS</span>, deployed with{" "}
          <span className="">Vercel</span>.
        </p>
        <p>
          <span className="opacity-60">© 2024 </span>
          <a
            className="duration-300 opacity-60 hover:opacity-100"
            href="https://jomaipio.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Joma Ipio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
