import { equipmentlist} from "../data/items";
import { useRef, useState } from "react";
import "../Styles/PageContent.css";
import TextContent from "./Text";
import { Rating } from "@mui/material";
import { AmazonOutlined } from "@ant-design/icons";

import { useMouseOverZoom } from "../Helpers/morehooks";
import contentStore from "../Helpers/contentStore";

const PageContent: React.FC = () => {
  const sourceRefs = useRef<HTMLImageElement>(null);
  const cursorRefs = useRef<HTMLDivElement>(null);
  const targetRefs = useRef<HTMLImageElement>(null);

  const sourceArray = useRef<HTMLImageElement[]>([]);
  const targetArray = useRef<HTMLImageElement[]>([]);
  const cursorArray = useRef<HTMLDivElement[]>([]);

  const [sourceState, setSourceState] = useState<HTMLImageElement | null>(
    sourceRefs.current
  );

  const [cursorState, setCursorState] = useState<HTMLDivElement | null>(
    cursorRefs.current
  );

  const [targetState, setTargetState] = useState<HTMLImageElement | null>(
    targetRefs.current
  );
  const [hoverActive, sethoverActive] = useState(true);

  useMouseOverZoom(sourceState, cursorState, targetState);

  return (
    <>
      <div className="page-content w-full text-center  justify-center ">
        {equipmentlist.map((s, index) => (
          <>
            <section id={`${s.name}`} className="card mb-4 mx-4 rounded-lg">
              <h2 
              style={{color:"var(--primary-text-colour)"}} 
                className={`mb-8 ${
                  index == 0 ? "mt-4" : ""
                } text-4xl font-medium `}
              >
                {s.displayName}
              </h2>
              <div className="flex relative m-4">
                <div className="flex flex-col">
                  <div className={`w-[350px] ${!contentStore.zoomOn? 'hover:scale-[1.01]':''} `}>
                    <img
                      ref={(ref) => ref && (sourceArray.current[index] = ref)}
                      className=" target-image"
                      src={s.image}
                      alt="Logo"
                      width="550"
                      height="auto"
                      onMouseEnter={() => {
                        setSourceState(sourceArray.current[index]);
                        setCursorState(cursorArray.current[index]);
                        setTargetState(targetArray.current[index]);
                        sethoverActive(true);
                        console.log(targetArray.current[index]);
                      }}
                      onMouseLeave={() => sethoverActive(false)}
                    />
                  </div>
                  <ul className="flex h-11">
                    <li className="mr-[100px]">
                      <a
                        className="black-link font-medium"
                        href={s.urlLink}
                      >{`Price: ${s.price}`}</a>
                    </li>
                    <li>
                      <a className="black-link font-medium product-link" href={s.urlLink}>
                        {"View Product ->"}
                      </a>
                    </li>
                  </ul>
                  {s.rating && (
                    <ul className="flex ">
                      <AmazonOutlined />
                      <Rating
                        name="half-rating"
                        defaultValue={s.rating}
                        precision={0.1}
                        readOnly
                        size="large"
                      />
                    </ul>
                  )}
                </div>

                <div
                  ref={(ref) => ref && (cursorArray.current[index] = ref)}
                  className="border border-black absolute pointer-events-none"
                />
                <div className="ml-8 font-colour">
                  <TextContent value={s.displayName} />
          
                </div>

                <div
                  className={`w-[400px] h-[400px] overflow-hidden absolute top-[0px] left-[600px] ${
                    hoverActive &&
                    targetState == targetArray.current[index] &&
                    contentStore.zoomOn
                      ? ""
                      : "hidden"
                  }`}
                >
                  <div className="w-[800px]">
                    <img
                      ref={(ref) => ref && (targetArray.current[index] = ref)}
                      className="ml-4 zoom-image"
                      src={s.image}
                      alt="Logo"
                      width="800"
                    />
                  </div>
                  
                </div>
              </div>
            </section>
          </>
        ))}
      </div>
    </>
  );
};

export default PageContent;
