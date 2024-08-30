import { useState } from "react";
import './Home.css';

function Home() {
    
    const [isFocused, setIsFocused] = useState(false);
    const [isSubFocused, setIsSubFocused] = useState(false);

    async function clickOnMain() {
        if (isSubFocused) {
          await setIsSubFocused(!isSubFocused);
          setIsFocused(!isFocused)
            
        } else {
        
        setIsFocused(!isFocused);
        }
    }

    function clickOnSub() {
        setIsSubFocused(!isSubFocused);
    }

    return (
        <div className="flex flex-auto">
        <div className="grid grid-rows-3 grid-flow-col gap-4 gap-y-8" >
            <div className={isSubFocused ? "top-item-out" : "top-item-in"}>
                <img className="block mx-auto h-24 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1721162075/synth.jpg"></img>
            </div>
            <div onClick={clickOnSub} className={isFocused ? "left-item-out z-20 hover:scale-125 transition-transform" : "left-item-in row-start-2"}>
                <img className="block mx-auto h-24 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1721162075/synth.jpg"></img>
            </div>
            <div></div>
            <div className={isFocused ? "top-item-out" : "top-item-in"}>
                <img className="block mx-auto h-24 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1721162075/synth.jpg"></img>
            </div>
            <div onClick={clickOnMain} className="z-30 hover:scale-125 transition-transform">
                <img className="block mx-auto h-24 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1721162075/synth.jpg"></img>
            </div>
            <div className={isFocused ? "bottom-item-out" : "bottom-item-in"}>
                <img className="block mx-auto h-24 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1721162075/synth.jpg"></img>
            </div>
            <div></div>
            <div className={isFocused ? "right-item-out" : "right-item-in"}>
                <img className="block mx-auto h-24 rounded-full" src="https://res.cloudinary.com/dopr8pnvl/image/upload/v1721162075/synth.jpg"></img>
            </div>
            <div></div>
        </div>
        </div>
    )
}

export default Home;