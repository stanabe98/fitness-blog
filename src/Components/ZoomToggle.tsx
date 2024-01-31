import { ZoomInOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import "../Styles/CustomToggle.css";

export const ZoomToggle: React.FC<{ cb?: () => void }> = ({ cb }) => {
  const [zoom, setZoom] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const ballRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setZoom(!zoom);
    const translatepx = 25;
    if (ballRef.current) {
      if (ballRef.current.style.transform == `translate(${translatepx}px)`) {
        ballRef.current.style.transform = "translate(0px)";
      } else {
        ballRef.current.style.transform = `translate(${translatepx}px)`;
      }
    }
    cb && cb();
  };

  const handleClick2 = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <div
      onClick={() => {
        handleClick2();
        handleClick();
      }}
      style={{
        backgroundColor: "var(--switch-bg)",
        boxShadow: isClicked ? "0 2px 2px var(--shadow-button)" : "",
        transition: "box-shadow 0.2s ease",
        border: "0.5px solid  var(--shadow)",
      }}
      className={`flex button-container cursor-pointer items-center w-[50px] justify-between relative h-[25px] rounded-full hover:scale-105`}
    >
      <div
        ref={ballRef}
        style={{ backgroundColor: "var(--switch-ball)" }}
        className="z-10 w-[20px] h-[20px] absolute top-[2.5px] left-[2.5px] transition-transform duration-500 rounded-full toggle-ball"
      ></div>
      <PoweroffOutlined
        style={{ color: "var(--switch-icon)" }}
        className={`z-1 mx-2 zoom-icon  ${zoom ? "zoom-icon-active" : ""} `}
      />
      <ZoomInOutlined
        style={{ color: "var(--switch-icon)" }}
        className={`z-1 mx-2 zoom-icon ${!zoom ? "zoom-icon-active " : ""} `}
      />
    </div>
  );
};
