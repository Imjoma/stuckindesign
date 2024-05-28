import React from "react";

const Footer = () => {
  return (
    <footer className="relative flex-1 w-full text-sm text-gray-500">
      <div className="absolute -translate-x-1/2 bottom-8 left-1/2">
        <p>
          Built with <span className="">NextJS</span>,{" "}
          <span className="">Tailwind CSS</span>, deployed with{" "}
          <span className="">Vercel</span>.
        </p>
        <p>
          © 2024{" "}
          <a
            className="duration-300 hover:text-white"
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
