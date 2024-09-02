import { useState } from "react";
import HtmlIcon from "./devicons/HtmlIcon";
import CssIcon from "./devicons/CssIcon";
import JsIcon from "./devicons/JsIcon";

function Video({src, codeUrl, demoUrl}) {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    
    function showButtons() {
        console.log("enter")
        setIsButtonVisible(true);
    }

    function hideButtons() {
        console.log("exit")
        setIsButtonVisible(false);
    }

    

    return (
        <div onMouseEnter={showButtons} onMouseLeave={hideButtons} className="relative rounded-lg overflow-hidden drop-shadow-xl hover:drop-shadow-2xl max-w-xl">
            <video
                className={`w-100 h-auto ${isButtonVisible ? 'blur-sm' : ''}`}
                src={src}
                autoPlay={true}
                muted
                loop
            />
            
            <div className="absolute bottom-1/2 w-full">
                <div className="flex justify-center gap-12 md:gap-24">
                    <button className={`btn btn-primary ${isButtonVisible ? 'visible' : 'hidden'}`}>
                        <a href={demoUrl} target="_blank">Live Demo</a>
                    </button>
                    <button className={`btn btn-primary ${isButtonVisible ? 'visible' : 'hidden'}`}>
                        <a href={codeUrl} target="_blank">View Code</a>
                    </button>
                </div>
            </div>
            
            <div className={`absolute bottom-1/4 w-full ${isButtonVisible ? 'visible' : 'hidden'}`}>
                <div className="flex justify-center gap-6 md:gap-12">
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="HTML">   
                        <HtmlIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="CSS">
                        <CssIcon />
                    </div>
                    <div className="tooltip hover:scale-110 transition-transform" data-tip="JavaScript">
                        <JsIcon />
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Video;