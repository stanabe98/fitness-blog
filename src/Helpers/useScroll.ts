import { useEffect, useState } from "react";

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollspy = (ids: string[], offset: number = 0) => {

  const [activeId,setActiveId]= useState("")

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      
      console.log("scroll", scroll);
      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          console.log("top", top);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      console.log(position);
      if (position) {
        setActiveId(position.id);
      }
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return activeId;
};

export default useScrollspy;
