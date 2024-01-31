import React, { useRef, useEffect, useState } from "react";
import "../Styles/Scrollbar.css";

import { observer } from "mobx-react";
import useScrollspy from "../Helpers/useScroll";
import { equipmentlist } from "../data/items";
import { Tooltip } from "antd";

export interface ScrollbarProps {
  title: string;
}

const Scrollbar: React.FC<{ data: ScrollbarProps[] }> = observer(({ data }) => {
  const ids = equipmentlist.map((s) => s.name);
  const [showNav, setShowNav] = useState(true);
  const activeId = useScrollspy(ids, 50);

  const handleLiClick = (name: string) => {
      const anchorElement = document.querySelector(
        `a[href="#${name}"]`
      ) as HTMLAnchorElement | null;
      if (anchorElement) {
        anchorElement.click();
      }
  };

  return (
    <>
      <nav className={`Sidebar  ${!showNav ? "collapsed" : ""}`}>
      {/* <nav className={`Sidebar bg-gradient-to-b from-cyan-500 to-blue-500 ${!showNav ? "collapsed" : ""}`}> */}

        <ul>
          <div className="flex  justify-end ">
            <div
              onClick={() => {
                setShowNav(!showNav);
              }}
              className={` flex items-center justify-center arrow cursor-pointer h-16 w-[16px] ${
                !showNav && "rotate-180"
              } transition-transform duration-200 `}
            >
              <div className="rounded-sm border-b-[3px] border-l-[3px] border-black w-[10px] h-[10px] rotate-45  mr-[-10px]"></div>
              <div className="border-2 border-black w-[12px] rounded h-0"></div>
            </div>
          </div>
          {equipmentlist.map((s) => (
            <Tooltip placement="rightTop" title={!showNav?s.displayName:undefined} >
            <li
              key={`menu-item-${s.name}`}
              onClick={() => handleLiClick(s.name)}
              className={`w-full overflow-hidden cursor-pointer flex items-center h-12 border-r-4 border-transparent 
              ${
                s.name == activeId ? "menu-link-active" : "menu-link"
              }`}
            >
              <a
                href={`#${s.name}`}
                className={`ml-2 whitespace-nowrap font-medium sidebartext ${s.name== activeId ?"menu-text-active":"menu-text"} ${
                  !showNav ? "hidden" : ""
                }`}
              >
                {s.displayName}
              </a>
            </li>
            </Tooltip>
          ))}
        </ul>
      </nav>
    </>
  );
});

export default Scrollbar;
