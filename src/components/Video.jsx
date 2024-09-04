import { useState } from "react";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { FaRegFileCode } from "react-icons/fa6";
import DevIcon from "./devicons/DevIcon";

function Video({ src, codeUrl, demoUrl, devTools }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  function showButtons() {
    setIsButtonVisible(true);
  }

  function hideButtons() {
    setIsButtonVisible(false);
  }

  return (
    <div
      onMouseEnter={showButtons}
      onMouseLeave={hideButtons}
      className="relative rounded-lg overflow-hidden drop-shadow-xl hover:drop-shadow-2xl"
    >
      <video
        className={`${isButtonVisible ? "blur-sm" : ""}`}
        src={src}
        autoPlay={true}
        muted
        loop
      />

      <div className="absolute bottom-[60%] md:bottom-[60%] w-full">
        <div className="flex justify-center gap-8">
          <button
            className={`btn btn-primary border-2 rounded-md border-white hover:border-white hover:scale-110 ${isButtonVisible ? "visible" : "hidden"}`}
          >
            <a href={demoUrl} target="_blank" className="text-white">
              <span className="flex">
                <MdOutlineScreenshotMonitor />
                &nbsp;Live Preview
              </span>
            </a>
          </button>
          {codeUrl &&
          <button
            className={`btn btn-primary border-2 rounded-md border-white hover:border-white hover:scale-110 ${isButtonVisible ? "visible" : "hidden"}`}
          >
            <a href={codeUrl} target="_blank" className="text-white">
              <span className="flex">
                <FaRegFileCode />
                &nbsp;View Code
              </span>
            </a>
          </button>}
        </div>
      </div>

      <div
        className={`absolute bottom-[15%] md:bottom-[20%] w-full ${isButtonVisible ? "visible" : "hidden"}`}
      >
        <div
          className={`flex justify-center bg-secondary/75 ${devTools.length > 3 ? "gap-3" : "gap-8"}`}
        >
          {devTools.map((devTool) => {
            return (
              <div
                key={devTool}
                className="tooltip hover:scale-125 transition-transform"
                data-tip={devTool}
              >
                <DevIcon name={devTool} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Video;
