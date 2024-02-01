import React, { useEffect, useMemo, useState } from "react";
import contentStore from "./contentStore";

function useMouse(ref: HTMLElement|null) {
  const [mouse, setMouse] = useState<{
    x: number;
    y: number;
    isActive: boolean;
  }>({ x: 0, y: 0, isActive: false });

  
  useEffect(() => {
    if (ref) {
      const handleMouseMove = (e: MouseEvent) => {
        // get mouse position relative to ref
        const rect = ref.getBoundingClientRect();
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
      const resetMouse = (e: Event) => {
        setMouse({
          x: 0,
          y: 0,
          isActive: false,
        });
      };
      ref.addEventListener("mousemove", handleMouseMove);
      ref.addEventListener("mouseout", handleMouseOut);
      ref.addEventListener("scroll", resetMouse );
      return () => {
        ref.removeEventListener("mousemove", handleMouseMove);
        ref.removeEventListener("mouseout", handleMouseOut);
      };
    }
  });
  return mouse;
}

export function useMouseOverZoom(
  source: HTMLImageElement|null,
  cursor: HTMLElement|null,
  target: HTMLImageElement|null,
  radius = 75
) {
  
  const { x, y, isActive } = useMouse(source);

  

  const zoomBounds = useMemo(() => {
    if(source==null) return
    if(!contentStore.zoomOn){
      return
    }
    const left =
      x < radius
        ? 0
        : x > source.getBoundingClientRect().width - radius
        ? source.getBoundingClientRect().width - radius * 2
        : x - radius;
    const top =
      y < radius
        ? 0
        : y > source.getBoundingClientRect().height - radius
        ? source.getBoundingClientRect().height - radius * 2
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
    if(!contentStore.zoomOn){
      return
    }
  
    if (cursor && zoomBounds)   {
      const { left, top, width, height } = zoomBounds;
      // cursor.current.style.left = `${left}px`;
      cursor.style.left = `${left}px`;
      cursor.style.top = `${top}px`;
      cursor.style.width = `${width}px`;
      cursor.style.height = `${height}px`;
      cursor.style.display = isActive ? "block" : "none";
    }
  }, [zoomBounds, isActive, source, cursor, target]);
  // draw the zoomed image on the canvas

  useEffect(()=>{
   

    if(!contentStore.zoomOn){
      return
    }
    if (source && target && cursor){
     if(isActive){
       const ratio=2;
       var leftNumber= parseInt(cursor.style.left)
       var topNumber= parseInt(cursor.style.top)
       
      target.style.objectPosition= `-${leftNumber*2}px -${topNumber*2}px`
    
     }
     else{
      target.style.objectPosition= '0px 0px';
     }
   
    }
  },[zoomBounds, isActive, source, cursor, target])
}
