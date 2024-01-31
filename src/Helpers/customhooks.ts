import React, { useEffect, useMemo, useState } from "react";

function useMouse(ref: React.RefObject<HTMLElement>) {
  const [mouse, setMouse] = useState<{
    x: number;
    y: number;
    isActive: boolean;
  }>({ x: 0, y: 0, isActive: false });
  useEffect(() => {
    if (ref.current) {
      const handleMouseMove = (e: MouseEvent) => {
        // get mouse position relative to ref
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            isActive: true,
          });
        }
      };
      const handleMouseOut = (e: MouseEvent) => {
        setMouse({
          x: 0,
          y: 0,
          isActive: false,
        });
      };
      ref.current.addEventListener("mousemove", handleMouseMove);
      ref.current.addEventListener("mouseout", handleMouseOut);
      return () => {
        ref.current!.removeEventListener("mousemove", handleMouseMove);
        ref.current!.removeEventListener("mouseout", handleMouseOut);
      };
    }
  });
  return mouse;
}

export function useMouseOverZoom(
  source: React.RefObject<HTMLImageElement>,
  cursor: React.RefObject<HTMLElement>,
  target: React.RefObject<HTMLImageElement>,
  radius = 75
) {
  // Capture Mouse position
  const { x, y, isActive } = useMouse(source);
  // Compute the part of the image to zoom based on mouse position
  const zoomBounds = useMemo(() => {
    const left =
      x < radius
        ? 0
        : x > source.current!.getBoundingClientRect().width - radius
        ? source.current!.getBoundingClientRect().width - radius * 2
        : x - radius;
    const top =
      y < radius
        ? 0
        : y > source.current!.getBoundingClientRect().height - radius
        ? source.current!.getBoundingClientRect().height - radius * 2
        : y - radius;

    const width = radius * 2;
    const height = radius * 2;

    return {
      left,
      top,
      width,
      height,
    };
  }, [x, y]);
  // move the cursor to the mouse position
  useEffect(() => {
    if (cursor.current) {
      const { left, top, width, height } = zoomBounds;
      // cursor.current.style.left = `${left}px`;
      cursor.current.style.left = `${left}px`;
      cursor.current.style.top = `${top}px`;
      cursor.current.style.width = `${width}px`;
      cursor.current.style.height = `${height}px`;
      cursor.current.style.display = isActive ? "block" : "none";
    }
  }, [zoomBounds, isActive, source, cursor, target]);
  // draw the zoomed image on the canvas

  useEffect(()=>{
    console.log("executing")
    if (source.current && target.current && cursor.current){
     if(isActive){
       const ratio=2;
       var leftNumber= parseInt(cursor.current.style.left)
       var topNumber= parseInt(cursor.current.style.top)
       
      target.current.style.objectPosition= `-${leftNumber*2}px -${topNumber*2}px`
    
     }
     else{
      target.current.style.objectPosition= '0px 0px';
     }
   
    }
  },[zoomBounds, isActive, source, cursor, target])
}
