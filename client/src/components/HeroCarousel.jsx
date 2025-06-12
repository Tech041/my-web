import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const items = [
    "I'M NELSON,",
    "SOFTWARE DEVELOPER",
    "I SPECIALIZE",
    "IN BUILDING",
    "FAST,RESPONSIVE",
    "AND SCALABLE",
    " WEB APPS",
    "USING THE",
    "MERN STACK.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full h-10  flex items-center justify-center overflow-hidden">
      <div className="transition-transform duration-700 ease-in-out text-2xl sm:text-3xl md:text-4xl font-bold">
        {items[index]}
      </div>
    </div>
  );
};

export default HeroCarousel;
