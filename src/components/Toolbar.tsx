"use client";
import { useState, useEffect } from "react";

const Toolbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 25) {
      setIsVisible(false); // Hide on scroll down
    } else {
      setIsVisible(true); // Show on scroll up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const headers: string[] = [
    "About",
    "Experience",
    "Achievements",
    "Projects",
    "Contact",
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between bg-navy px-12 py-5 z-10 shadow-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <p className="text-aquamarine font-sans cursor-pointer">Logo</p>
      </div>

      <div className="flex gap-10 slashed-zero items-center">
        {headers.map((word, index) => (
          <p
            key={index}
            className="text-aquamarine slashed-zero font-sans cursor-pointer"
          >
            {`0${index + 1}. `}
            <span className="font-sans text-lavendar hover:text-aquamarine slashed-zero cursor-pointer">
              {word}
            </span>
          </p>
        ))}
        <div className="bg-transparent border border-aquamarine py-2 px-3 text-aquamarine rounded-md font-sans cursor-pointer">
          Resume
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
