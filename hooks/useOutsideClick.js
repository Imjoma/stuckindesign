"use client";

import { useEffect } from "react";

export const useOutsideAlerter = (ref, callback) => {
  useEffect(() => {
    // Click outside
    function handleClickOutside(event) {
      // if ref and ref doesn't contains the element
      if (ref.current && !ref.current.contains(event.target)) {
        callback(null);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
